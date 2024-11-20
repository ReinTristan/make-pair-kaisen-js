import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { GameCard } from './GameCard'
import { gameSprites, SpriteKey } from '@/config/images'
import shuffle from 'just-shuffle'
import { ISelectedCards, IGameCards, ICardName, MenuOptions } from '@/types'
import { toast } from 'sonner'
export function Board({
	lives,
	setLives,
	gameOver,
	mode,
	setScore,
}: {
	lives: number
	setLives: Dispatch<SetStateAction<number>>
	gameOver: boolean
	mode: MenuOptions
	setScore: Dispatch<SetStateAction<number>>
}) {
	const debug = false
	const [gameStarted, setGameStarted] = useState(false)
	const [waitForSelect, setWaitForSelect] = useState(false)
	const generateBoard = (): IGameCards[] => {
		const positions = shuffle([
			0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8,
		])
		const spritesArray = Object.entries(gameSprites)
		return positions.map((order, idx) => ({
			sprite: spritesArray[order][1] as SpriteKey,
			isFlipped: mode === 'infinito' ? false : true,
			name: spritesArray[order][0],
			position: idx,
		}))
	}

	const [completedCount, setCompletedCount] = useState(0)
	const [board, setBoard] = useState<IGameCards[]>(generateBoard())
	const [selectedCards, setSelectedCards] = useState<ISelectedCards>({
		first: null,
		second: null,
	})
	const [completedCards, setCompletedCards] = useState<ICardName>({
		yuji: false,
		nobara: false,
		megumi: false,
		gojo: false,
		nanami: false,
		panda: false,
		toge: false,
		maki: false,
		suguru: false,
	})
	useEffect(() => {
		const started = setTimeout(() => {
			if (mode === 'infinito') {
				setGameStarted(true)
			}
		}, 2000)
		return () => {
			clearTimeout(started)
		}
	}, [])
	useEffect(() => {
		if (gameStarted) {
			setBoard((prev) => {
				return prev.map((card) => {
					return { ...card, isFlipped: true }
				})
			})
		}
	}, [gameStarted])
	useEffect(() => {
		if (selectedCards.first && selectedCards.second) {
			if (selectedCards.first.name === selectedCards.second.name) {
				console.log('match')
				const cardName = selectedCards.first.name
				setCompletedCards((prev) => ({
					...prev,
					[cardName]: true,
				}))
				setCompletedCount((prev) => prev + 1)
				setScore((prev) => prev + 100)
				if (completedCount === 8) {
					toast.success('Tablero completo')
					setWaitForSelect(true)
					setTimeout(() => {
						setBoard(generateBoard())
						setCompletedCount(0)
						setWaitForSelect(false)
						setCompletedCards({
							yuji: false,
							nobara: false,
							megumi: false,
							gojo: false,
							nanami: false,
							panda: false,
							toge: false,
							maki: false,
							suguru: false,
						})
					}, 1000)
				}
			} else {
				console.log('no match')
				setWaitForSelect(true)
				if (lives >= 0) setLives((prev) => prev - 1)
				setTimeout(() => {
					setBoard((prev) => {
						console.log('enter changing board')
						return prev.map((card) => {
							if (card.position === selectedCards.first?.position) {
								return { ...card, isFlipped: true }
							}
							if (card.position === selectedCards.second?.position) {
								return { ...card, isFlipped: true }
							}
							return card
						})
					})
					setWaitForSelect(false)
				}, 1000)
			}
			setSelectedCards({ first: null, second: null })
		}
	}, [selectedCards])
	// console.log('board', board)
	const handleSelectCard = (card: IGameCards) => {
		if (mode === 'infinito' && !gameStarted) return
		if (gameOver) return
		if (waitForSelect) return
		if (completedCards[card.name as SpriteKey]) return
		console.log('card', card)
		setBoard((prev) => {
			return prev.map((prevCard) => {
				if (prevCard.position === card.position) {
					return { ...prevCard, isFlipped: !prevCard.isFlipped }
				}
				return prevCard
			})
		})
		setSelectedCards((prev) => {
			if (prev.first === null) {
				return { ...prev, first: card }
			}
			if (prev.second === null) {
				if (prev.first.position === card.position) {
					return { ...prev, first: null }
				}
				return { ...prev, second: card }
			}
			return prev
		})
	}
	return (
		<>
			{debug && (
				<div className='w-1/2 flex flex-col'>
					<button
						className='w-1/2 h-12 bg-blue-500 text-white rounded-lg'
						onClick={() => setBoard(generateBoard())}
					>
						reload
					</button>
					<span className='text-[70px] text-white'>
						first {selectedCards.first?.position || 0}
					</span>
					<span className='text-[70px] text-white'>
						Second {selectedCards.second?.position || 0}
					</span>
				</div>
			)}
			<div className='grid grid-cols-6 grid-rows-3 gap-y-4 w-full justify-items-center justify-center'>
				{board.map((card, i) => (
					<GameCard
						key={i}
						sprite={card.sprite as SpriteKey}
						name={card.name}
						isFlipped={card.isFlipped}
						onSelectCard={() => {
							handleSelectCard(card)
						}}
					/>
				))}
			</div>
		</>
	)
}

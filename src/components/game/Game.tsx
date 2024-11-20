import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Board } from './Board'
import { MenuOptions } from '@/types'
import { strokeStyle } from '@/lib/utils'
import { Lives } from './Lives'
import { Timer } from './Timer'
import { toast } from 'sonner'

export function Game({
	mode,
	setMode,
}: {
	mode: MenuOptions
	setMode: Dispatch<SetStateAction<MenuOptions>>
}) {
	const [lives, setLives] = useState(4)
	const [time, setTime] = useState(180)
	const [score, setScore] = useState(0)
	const [gameOver, setGameOver] = useState(false)
	useEffect(() => {
		if (mode === 'infinito') {
			if (lives < 0) {
				setGameOver(true)
			}
		}
	}, [gameOver, lives])
	useEffect(() => {
		if (mode === 'tiempo') {
			if (time === 0) {
				setGameOver(true)
			}
		}
	}, [gameOver, time])
	useEffect(() => {
		let timeOut = null
		if (gameOver) {
			toast.error('Game Over', { duration: 3000 })
			timeOut = setTimeout(() => {
				setMode('inicio')
				setLives(4)
				setTime(180)
				setScore(0)
				setGameOver(false)
			}, 3000)
		}
		return () => {
			if (gameOver) {
				setMode('inicio')
				setLives(4)
				setTime(180)
				setScore(0)
				setGameOver(false)
				if (timeOut) clearTimeout(timeOut)
			}
		}
	}, [gameOver])
	return (
		<>
			<div className='grid grid-cols-3 w-full items-center place-items-center'>
				<div className='self-start flex flex-col justify-center items-center'>
					<h3
						className='text-center text-[100px]'
						style={{ ...strokeStyle(1) }}
					>
						Puntaje
					</h3>
					<span className=' text-[70px]' style={{ ...strokeStyle(1) }}>
						{score}
					</span>
				</div>
				<h2
					className=' text-[150px] z-10 blur-none whitespace-nowrap capitalize'
					style={{ ...strokeStyle(5) }}
				>
					{mode}
				</h2>
				<div className='self-start'>
					{mode === 'infinito' && <Lives lives={lives} />}
					{mode === 'tiempo' && <Timer time={time} setTime={setTime} />}
				</div>
			</div>
			<div className='flex justify-center px-16'>
				<Board
					setScore={setScore}
					lives={lives}
					gameOver={gameOver}
					setLives={setLives}
					mode={mode}
				/>
			</div>
		</>
	)
}

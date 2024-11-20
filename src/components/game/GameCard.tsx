import { configSprites, type SpriteKey } from '@/config/images'
export function GameCard({
	sprite,
	name,
	isFlipped,
	onSelectCard,
}: {
	sprite: SpriteKey
	name: string
	isFlipped: boolean
	onSelectCard: () => void
}) {
	return (
		<div
			className='rounded-md w-32 aspect-square bg-white bg-opacity-70 cursor-pointer'
			onClick={() => {
				onSelectCard()
			}}
		>
			{isFlipped ? (
				<img
					src={configSprites['logo']}
					alt={name}
					className='w-full h-full object-cover'
				/>
			) : (
				<img
					src={sprite}
					alt={name}
					className='w-full h-full object-cover rounded-md'
				/>
			)}
		</div>
	)
}

import { configSprites } from '@/config/images'
import { strokeStyle } from '@/lib/utils'
export function Lives({ lives }: { lives: number }) {
	return (
		<>
			<h3 className='text-center text-[100px]' style={{ ...strokeStyle(1) }}>
				Vidas
			</h3>
			<div className='flex space-x-2'>
				{Array.from({ length: lives }, (_, i) => (
					<img
						key={i}
						src={configSprites['lives']}
						alt='lives'
						className='w-24 h-24'
					/>
				))}
			</div>
		</>
	)
}

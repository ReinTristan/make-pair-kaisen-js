import { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/ui/button'
import { strokeStyle } from '@/lib/utils'
import { MenuOptions } from '@/types'
import { toast } from 'sonner'

export function Menu({
	setMenuItem,
}: {
	setMenuItem: Dispatch<SetStateAction<MenuOptions>>
}) {
	return (
		<>
			<h1
				className='text-center text-[200px] z-10 blur-none whitespace-nowrap'
				style={{ ...strokeStyle(5) }}
			>
				Make the Pair Kaisen
			</h1>
			<div className='flex flex-col justify-center items-center gap-8 text-3xl'>
				<Button
					className='w-[460px] h-[100px] text-[70px] text-black bg-white bg-opacity-50 rounded-lg'
					style={{ ...strokeStyle(1) }}
					onClick={() => {
						setMenuItem('infinito')
					}}
				>
					Infinito
				</Button>
				<Button
					className='w-[460px] h-[100px] text-[70px] text-black bg-white bg-opacity-50 rounded-lg'
					style={{ ...strokeStyle(1) }}
					onClick={() => {
						setMenuItem('tiempo')
					}}
				>
					Tiempo
				</Button>
				<Button
					className='w-[460px] h-[100px] text-[70px] text-black bg-white bg-opacity-50 rounded-lg'
					style={{ ...strokeStyle(1) }}
					onClick={() => {
						toast.info('Puntaje proximamente', { duration: 3000 })
						return
						setMenuItem('puntaje')
					}}
				>
					Puntaje
				</Button>
			</div>
		</>
	)
}

import { strokeStyle } from '@/lib/utils'
import { Dispatch, SetStateAction, useEffect } from 'react'

export function Timer({
	time,
	setTime,
}: {
	time: number
	setTime: Dispatch<SetStateAction<number>>
}) {
	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
	}
	useEffect(() => {
		//Implementing the setInterval method
		const interval = setInterval(() => {
			setTime((prev) => {
				if (prev === 0) {
					clearInterval(interval)
					return 0
				}
				return prev - 1
			})
		}, 1000)

		//Clearing the interval
		return () => clearInterval(interval)
	}, [time])
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<h3 className='text-center text-[100px]' style={{ ...strokeStyle(1) }}>
					Tiempo
				</h3>
				<span className=' text-[70px]' style={{ ...strokeStyle(1) }}>
					{formatTime(time)}
				</span>
			</div>
		</>
	)
}

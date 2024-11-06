import { CSSProperties } from 'react'
import { Button } from './components/ui/button'
import { toast, Toaster } from 'sonner'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartContainer } from './components/ui/chart'

const strokeStyle = (pixelW: number): CSSProperties => ({
	WebkitTextStroke: `${pixelW}px var(--yellowKaisen)`,
})
const chartConfig = {
	infinito: {
		label: 'Infinito',
		color: '#333',
	},
	tiempo: {
		label: 'Tiempo',
		color: '#ebdfae',
	},
} satisfies ChartConfig

const chartData = [
	{ player: 'player1', infinito: 1000, tiempo: 1000 },
	{ player: 'player2', infinito: 800, tiempo: 200 },
	{ player: 'player3', infinito: 900, tiempo: 800 },
]
function App() {
	return (
		<>
			<Toaster richColors position='top-center' />
			<div className='relative'>
				<div className='absolute right-0 left-0 container bg-kaisen bg-contain blur-sm aspect-video mx-auto mt-4'></div>
				<div className='absolute right-0 left-0 container aspect-video mx-auto mt-4 font-jah text-stroke'>
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
								toast.info('Proximamente')
							}}
						>
							Infinito
						</Button>
						<Button
							className='w-[460px] h-[100px] text-[70px] text-black bg-white bg-opacity-50 rounded-lg'
							style={{ ...strokeStyle(1) }}
							onClick={() => {
								toast.info('Proximamente')
							}}
						>
							Tiempo
						</Button>
						<Button
							className='w-[460px] h-[100px] text-[70px] text-black bg-white bg-opacity-50 rounded-lg'
							style={{ ...strokeStyle(1) }}
							onClick={() => {
								toast.info('Proximamente')
							}}
						>
							Puntaje
						</Button>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-2'>
				<div className='p-4'>
					<h2 className='text-center text-[80px] font-jah'>
						Estadisticas de puntaje
					</h2>
					<ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
						<BarChart accessibilityLayer data={chartData}>
							<XAxis
								dataKey='player'
								tickLine={false}
								tickMargin={10}
								axisLine={false}
							/>
							<YAxis tickLine={false} axisLine={false} />
							<Bar dataKey='infinito' fill='var(--color-infinito)' radius={4} />
							<Bar dataKey='tiempo' fill='var(--color-tiempo)' radius={4} />
						</BarChart>
					</ChartContainer>
				</div>
				<div className='p-4'>
					<h2 className='text-center text-[80px] font-jah'>
						Estadisticas de partidas
					</h2>
					<ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
						<BarChart accessibilityLayer data={chartData}>
							<XAxis
								dataKey='player'
								tickLine={false}
								tickMargin={10}
								axisLine={false}
							/>
							<YAxis tickLine={false} axisLine={false} />
							<Bar dataKey='infinito' fill='var(--color-infinito)' radius={4} />
							<Bar dataKey='tiempo' fill='var(--color-tiempo)' radius={4} />
						</BarChart>
					</ChartContainer>
				</div>
			</div>
		</>
	)
}

export default App

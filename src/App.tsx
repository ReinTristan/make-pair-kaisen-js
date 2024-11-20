import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartContainer } from './components/ui/chart'
import { Menu } from './components/game/Menu'
import { Toaster } from '@/components/ui/sonner'
import { useState } from 'react'
import { MenuOptions } from './types'
import { Game } from './components/game/Game'

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
	const [menuItem, setMenuItem] = useState<MenuOptions>('inicio')
	return (
		<>
			<Toaster richColors position='top-center' />
			<div className='relative aspect-video'>
				<div className='absolute right-0 left-0 container bg-kaisen bg-contain blur-sm aspect-video mx-auto mt-4'></div>
				<div className='absolute right-0 left-0 container aspect-video mx-auto mt-4 font-jah text-stroke'>
					{menuItem === 'inicio' && <Menu setMenuItem={setMenuItem} />}
					{menuItem === 'infinito' && (
						<Game mode='infinito' setMode={setMenuItem} />
					)}
					{menuItem === 'tiempo' && (
						<Game mode='tiempo' setMode={setMenuItem} />
					)}
					{/* {menuItem === 'puntaje' && null} */}
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

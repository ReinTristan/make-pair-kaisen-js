import { SpriteKey } from './config/images'

export type MenuOptions = 'inicio' | 'infinito' | 'tiempo' | 'puntaje'

export interface IGameCards {
	sprite: SpriteKey
	isFlipped: boolean
	name: string
	position: number
}

export interface ISelectedCards {
	first: null | IGameCards
	second: null | IGameCards
}

export type ICardName = Record<SpriteKey, boolean>

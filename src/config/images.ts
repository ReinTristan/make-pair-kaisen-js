import yuji from '@/assets/images/yuji.webp'
import nobara from '@/assets/images/nobara.webp'
import megumi from '@/assets/images/megumi.webp'
import gojo from '@/assets/images/gojo.webp'
import nanami from '@/assets/images/nanami.webp'
import panda from '@/assets/images/panda.webp'
import toge from '@/assets/images/toge.webp'
import maki from '@/assets/images/maki.webp'
import suguru from '@/assets/images/suguru.jpg'
import lives from '@/assets/images/lives.png'
import logo from '@/assets/images/jujutsu-logo.webp'

export const gameSprites = {
	yuji,
	nobara,
	megumi,
	gojo,
	nanami,
	panda,
	toge,
	maki,
	suguru,
}
export const configSprites = {
	lives,
	logo,
}

export type SpriteKey = keyof typeof gameSprites
export type ConfigKey = keyof typeof configSprites
export type AllSprites = SpriteKey | ConfigKey

import { clsx, type ClassValue } from 'clsx'
import { CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const strokeStyle = (pixelW: number): CSSProperties => ({
	WebkitTextStroke: `${pixelW}px var(--yellowKaisen)`,
})

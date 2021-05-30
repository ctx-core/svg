import { _b } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx'
const key = 'svg_width$'
export const svg_width$_b = _b<svg_Ctx, typeof key>(key, ()=>
	writable(undefined) as svg_width$_T
)
export type svg_width_T = number
export type maybe_svg_width_T = svg_width_T|undefined
export interface svg_width$_T extends Writable<maybe_svg_width_T> {}
export {
	svg_width$_b as b__width__svg,
}

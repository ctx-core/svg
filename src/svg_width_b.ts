import { _b } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
const key = 'svg_width'
export interface svg_width_Ctx {
	svg_width?:svg_width_T
}
export const svg_width_b = _b<svg_width_Ctx, typeof key>(key, ()=>
	writable(undefined) as svg_width_T
)
export type $svg_width_T = number
export type $maybe_svg_width_T = $svg_width_T|undefined
export interface svg_width_T extends Writable<$maybe_svg_width_T> {}
export {
	svg_width_b as b__width__svg,
}

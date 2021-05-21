import type { maybe_null } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
const key = 'svg_height'
export interface svg_height_Ctx {
	svg_height?:svg_height_T
}
export const svg_height_b = _b<svg_height_Ctx, typeof key>(key, ()=>
	writable(null) as svg_height_T
)
export type $svg_height_T = number
export type $maybe_svg_height_T = maybe_null<$svg_height_T>
export interface svg_height_T extends Writable<$maybe_svg_height_T> {}
export {
	svg_height_b as b__height__svg,
}

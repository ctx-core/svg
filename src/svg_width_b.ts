import { _b, B } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
export const svg_width_b:svg_width_b_T = _b('svg_width', ()=>
	writable(null) as svg_width_T
)
export type $svg_width_T = number
export type $svg_width_type = $svg_width_T
export type $maybe_svg_width_T = maybe_null<$svg_width_T>
export type $maybe_svg_width_type = $maybe_svg_width_T
export interface svg_width_T extends Writable<$maybe_svg_width_T> {}
export type svg_width_type = svg_width_T
export interface svg_width_b_T extends B<svg_width_T> {}
export type svg_width_b_type = svg_width_b_T
export {
	svg_width_b as b__width__svg,
}

import { _b, B } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
export const svg_width_b:svg_width_b_type = _b('svg_width', ()=>
	writable(null) as svg_width_type
)
export type $svg_width_type = number
export type $maybe_svg_width_type = maybe_null<$svg_width_type>
export interface svg_width_type extends Writable<$maybe_svg_width_type> {}
export interface svg_width_b_type extends B<svg_width_type> {}
export {
	svg_width_b as b__width__svg,
}

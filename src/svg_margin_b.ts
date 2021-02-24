import { _b, B } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { Placement } from './Placement'
export const svg_margin_b:svg_margin_b_T = _b('svg_margin', ()=>
	writable(null) as svg_margin_T
)
export type $svg_margin_T = Placement
export type $svg_margin_type = $svg_margin_T
export type $maybe_svg_margin_T = $svg_margin_T|null
export type $maybe_svg_margin_type = $maybe_svg_margin_T
export interface svg_margin_T extends Writable<$maybe_svg_margin_T> {}
export type svg_margin_type = svg_margin_T
export interface svg_margin_b_T extends B<svg_margin_T> {}
export type svg_margin_b_type = svg_margin_b_T
export {
	svg_margin_b as b__margin__svg,
}

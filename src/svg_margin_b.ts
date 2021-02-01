import { _b, B } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { Placement } from './Placement'
export const svg_margin_b:svg_margin_b_type = _b('svg_margin', ()=>
	writable(null) as svg_margin_type
)
export type $svg_margin_type = Placement
export type $maybe_svg_margin_type = $svg_margin_type|null
export interface svg_margin_type extends Writable<$maybe_svg_margin_type> {}
export interface svg_margin_b_type extends B<svg_margin_type> {}
export {
	svg_margin_b as b__margin__svg,
}

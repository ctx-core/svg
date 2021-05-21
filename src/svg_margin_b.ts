import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { Placement } from './Placement'
const key = 'svg_margin'
export interface svg_margin_Ctx {
	svg_margin?:svg_margin_T
}
export const svg_margin_b = _b<svg_margin_Ctx, typeof key>(key, ()=>
	writable(undefined) as svg_margin_T
)
export type $svg_margin_T = Placement
export type $maybe_svg_margin_T = $svg_margin_T|undefined
export interface svg_margin_T extends Writable<$maybe_svg_margin_T> {}
export {
	svg_margin_b as b__margin__svg,
}

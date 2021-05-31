import { be_ } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { Placement } from './Placement'
import type { svg_Ctx } from './svg_Ctx'
const key = 'svg_margin$'
export const svg_margin$_b = be_<svg_Ctx, typeof key>(key, ()=>
	writable(undefined) as svg_margin$_T
)
export type svg_margin_T = Placement
export type maybe_svg_margin_T = svg_margin_T|undefined
export interface svg_margin$_T extends Writable<maybe_svg_margin_T> {}
export {
	svg_margin$_b as b__margin__svg,
}

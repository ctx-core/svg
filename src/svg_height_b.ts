import type { maybe_null } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx'
const key = 'svg_height'
export const svg_height_b = _b<svg_Ctx, typeof key>(key, ()=>
	writable(null) as svg_height_T
)
export type $svg_height_T = number
export type $maybe_svg_height_T = maybe_null<$svg_height_T>
export interface svg_height_T extends Writable<$maybe_svg_height_T> {}
export {
	svg_height_b as b__height__svg,
}

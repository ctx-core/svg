import type { maybe_null } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx'
const key = 'svg_height$'
export const svg_height$_b:B<svg_Ctx, typeof key> = be_(key, ()=>
	writable(null) as svg_height$_T
)
export type svg_height_T = number
export type maybe_svg_height_T = maybe_null<svg_height_T>
export interface svg_height$_T extends Writable<maybe_svg_height_T> {}
export {
	svg_height$_b as b__height__svg,
}

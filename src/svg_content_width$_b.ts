import type { maybe_null } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx'
const key = 'svg_content_width$'
export const svg_content_width$_b:B<svg_Ctx, typeof key> = be_(key, ()=>
	writable(null) as svg_content_width$_T
)
export type svg_content_width_T = number
export type maybe_svg_content_width_T = maybe_null<svg_content_width_T>
export interface svg_content_width$_T extends Writable<maybe_svg_content_width_T> {}
export {
	svg_content_width$_b as b__width__content__svg,
}

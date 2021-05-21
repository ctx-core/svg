import type { maybe_null } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
const key = 'svg_content_width'
export interface svg_content_width_Ctx {
	svg_content_width?:svg_content_width_T
}
export const svg_content_width_b = _b<svg_content_width_Ctx, typeof key>(key, ()=>
	writable(null) as svg_content_width_T
)
export type $svg_content_width_T = number
export type $maybe_svg_content_width_T = maybe_null<$svg_content_width_T>
export interface svg_content_width_T extends Writable<$maybe_svg_content_width_T> {}
export {
	svg_content_width_b as b__width__content__svg,
}

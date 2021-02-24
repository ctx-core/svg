import { _b, B } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const svg_content_width_b:svg_content_width_b_T = _b('svg_content_width', ()=>
	writable(null) as svg_content_width_T
)
export type $svg_content_width_T = number
export type $svg_content_width_type = $svg_content_width_T
export type $maybe_svg_content_width_T = maybe_null<$svg_content_width_T>
export type $maybe_svg_content_width_type = $maybe_svg_content_width_T
export interface svg_content_width_T extends Writable<$maybe_svg_content_width_T> {}
export type svg_content_width_type = svg_content_width_T
export interface svg_content_width_b_T extends B<svg_content_width_T> {}
export type svg_content_width_b_type = svg_content_width_b_T
export {
	svg_content_width_b as b__width__content__svg,
}

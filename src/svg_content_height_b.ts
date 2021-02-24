import { _b, B } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const svg_content_height_b:svg_content_height_b_T = _b('svg_content_height', ()=>
	writable(null) as svg_content_height_T
)
export type $svg_content_height_T = number
export type $svg_content_height_type = $svg_content_height_T
export type $maybe_svg_content_height_T = maybe_null<$svg_content_height_T>
export type $maybe_svg_content_height_type = $maybe_svg_content_height_T
export interface svg_content_height_T extends Writable<$maybe_svg_content_height_T> {}
export type svg_content_height_type = svg_content_height_T
export interface svg_content_height_b_T extends B<svg_content_height_T> {}
export type svg_content_height_b_type = svg_content_height_b_T
export {
	svg_content_height_b as b__height__content__svg,
}

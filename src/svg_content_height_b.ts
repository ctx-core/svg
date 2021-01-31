import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const svg_content_height_b = _b('svg_content_height', ()=>
	writable(null) as svg_content_height_type
)
export type $svg_content_height_type = number
export type $maybe_svg_content_height_type = maybe_null<$svg_content_height_type>
export interface svg_content_height_type extends Writable<$maybe_svg_content_height_type> {}
export {
	svg_content_height_b as b__height__content__svg,
	$svg_content_height_type as $type__height__content__svg,
	$maybe_svg_content_height_type as $maybe_type__height__content__svg,
	svg_content_height_type as type__height__content__svg,
}

import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const svg_content_width_b = _b('svg_content_width', ()=>
	writable(null) as svg_content_width_type
)
export type $svg_content_width_type = number
export type $maybe_svg_content_width_type = maybe_null<$svg_content_width_type>
export interface svg_content_width_type extends Writable<$maybe_svg_content_width_type> {}
export {
	svg_content_width_b as b__width__content__svg,
	$svg_content_width_type as $type__width__content__svg,
	$maybe_svg_content_width_type as $maybe_type__width__content__svg,
	svg_content_width_type as type__width__content__svg,
}

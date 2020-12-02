import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
export const svg_width_b = _b<svg_width_type>('svg_width', ()=>
	writable(null))
export type $svg_width_type = number
export type $maybe_svg_width_type = maybe_null<$svg_width_type>
export type svg_width_type = Writable<$maybe_svg_width_type>
export {
	svg_width_b as b__width__svg,
	$svg_width_type as $type__width__svg,
	$maybe_svg_width_type as $maybe_type__width__svg,
	svg_width_type as type__width__svg
}
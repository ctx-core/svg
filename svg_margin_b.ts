import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
import type { Placement } from './Placement'
export const svg_margin_b = _b<svg_margin_type>('svg_margin', ()=>
	writable(null))
export type $svg_margin_type = Placement
export type $maybe_svg_margin_type = maybe_null<$svg_margin_type>
export type svg_margin_type = Writable<$maybe_svg_margin_type>
export {
	svg_margin_b as b__margin__svg,
	$svg_margin_type as $type__margin__svg,
	$maybe_svg_margin_type as $maybe_type__margin__svg,
	svg_margin_type as type__margin__svg,
}

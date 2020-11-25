import { _b } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { $svg_margin_type, svg_margin_b } from './svg_margin_b'
import { svg_width_b } from './svg_width_b'
import { svg_height_b } from './svg_height_b'
import { svg_content_width_b } from './svg_content_width_b'
import { svg_content_height_b } from './svg_content_height_b'
import type { Placement } from './Placement'
export const set_svg_matrix2d_b = _b('set_svg_matrix2d', ctx=>{
	return set__matrix2d__svg
	async function set__matrix2d__svg(
		opts:Opts__set__matrix2d__svg = {}
	) {
		const svg_margin =
			opts.svg_margin
			|| get(svg_margin_b(ctx))
			|| { top: 20, right: 20, bottom: 60, left: 100 } as $svg_margin_type
		const svg_width =
			opts.svg_width
			|| get(svg_width_b(ctx))
			|| NaN
		const svg_height =
			opts.svg_height
			|| get(svg_height_b(ctx))
			|| NaN
		const {
			left,
			right,
			top,
			bottom,
		} = svg_margin
		const width__content__svg = svg_width - left - right
		const height__content__svg = svg_height - top - bottom
		svg_margin_b(ctx).set(svg_margin)
		svg_width_b(ctx).set(svg_width)
		svg_height_b(ctx).set(svg_height)
		svg_content_width_b(ctx).set(width__content__svg)
		svg_content_height_b(ctx).set(height__content__svg)
	}
})
export interface Opts__set__matrix2d__svg {
	svg_margin?:Placement
	svg_width?:number
	svg_height?:number
}
export {
	set_svg_matrix2d_b as b__set__matrix2d__svg,
}

import { _b, B } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { $svg_margin_T, svg_margin_b } from './svg_margin_b'
import { svg_width_b } from './svg_width_b'
import { svg_height_b } from './svg_height_b'
import { svg_content_width_b } from './svg_content_width_b'
import { svg_content_height_b } from './svg_content_height_b'
import type { Placement } from './Placement'
export const set_svg_matrix2d_b:set_svg_matrix2d_b_T = _b('set_svg_matrix2d', ctx=>{
	return set_svg_matrix2d
	async function set_svg_matrix2d(
		opts:svg_matrix2d_set_opts_T = {}
	) {
		const svg_margin =
			opts.svg_margin
			|| get(svg_margin_b(ctx))
			|| { top: 20, right: 20, bottom: 60, left: 100 } as $svg_margin_T
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
export interface svg_matrix2d_set_opts_T {
	svg_margin?:Placement
	svg_width?:number
	svg_height?:number
}
export type svg_matrix2d_set_opts_type = svg_matrix2d_set_opts_T
export type set_svg_matrix2d_T = (opts:svg_matrix2d_set_opts_T)=>Promise<void>
export type set_svg_matrix2d_type = set_svg_matrix2d_T
export interface set_svg_matrix2d_b_T extends B<set_svg_matrix2d_T> {}
export type set_svg_matrix2d_b_type = set_svg_matrix2d_b_T
export {
	set_svg_matrix2d_b as b__set__matrix2d__svg,
}

import { _b } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { $svg_margin_T, svg_margin_b, svg_margin_Ctx } from './svg_margin_b'
import { svg_width_b, svg_width_Ctx } from './svg_width_b'
import { svg_height_b, svg_height_Ctx } from './svg_height_b'
import { svg_content_width_b, svg_content_width_Ctx } from './svg_content_width_b'
import { svg_content_height_b, svg_content_height_Ctx } from './svg_content_height_b'
import type { Placement } from './Placement'
const key = 'set_svg_matrix2d'
export interface set_svg_matrix2d_Ctx
	extends svg_margin_Ctx,
		svg_width_Ctx,
		svg_height_Ctx,
		svg_content_width_Ctx,
		svg_content_height_Ctx {
	set_svg_matrix2d?:set_svg_matrix2d_T
}
export const set_svg_matrix2d_b = _b<set_svg_matrix2d_Ctx, typeof key>(key, ctx=>{
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
export type set_svg_matrix2d_T = (opts:svg_matrix2d_set_opts_T)=>Promise<void>
export {
	set_svg_matrix2d_b as b__set__matrix2d__svg,
}

import { B, be_ } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { svg_margin_T, svg_margin$_b } from './svg_margin$_b'
import { svg_width$_b } from './svg_width$_b'
import { svg_height$_b } from './svg_height$_b'
import { svg_content_width$_b } from './svg_content_width$_b'
import { svg_content_height$_b } from './svg_content_height$_b'
import type { Placement } from './Placement'
import type { svg_Ctx } from './svg_Ctx'
const key = 'set_svg_matrix2d'
export const set_svg_matrix2d_b:B<svg_Ctx, typeof key> = be_(key, ctx=>{
	return set_svg_matrix2d
	async function set_svg_matrix2d(
		opts:svg_matrix2d_set_opts_T = {}
	) {
		const svg_margin =
			opts.svg_margin
			|| get(svg_margin$_b(ctx))
			|| { top: 20, right: 20, bottom: 60, left: 100 } as svg_margin_T
		const svg_width =
			opts.svg_width
			|| get(svg_width$_b(ctx))
			|| NaN
		const svg_height =
			opts.svg_height
			|| get(svg_height$_b(ctx))
			|| NaN
		const {
			left,
			right,
			top,
			bottom,
		} = svg_margin
		const svg_content_width = svg_width - left - right
		const svg_content_height = svg_height - top - bottom
		svg_margin$_b(ctx).set(svg_margin)
		svg_width$_b(ctx).set(svg_width)
		svg_height$_b(ctx).set(svg_height)
		svg_content_width$_b(ctx).set(svg_content_width)
		svg_content_height$_b(ctx).set(svg_content_height)
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

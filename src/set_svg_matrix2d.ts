import type { Ctx } from '@ctx-core/object'
import type { Placement } from './Placement.js'
import { svg_content_height$_ } from './svg_content_height$_.js'
import { svg_content_width$_ } from './svg_content_width$_.js'
import { svg_height$_ } from './svg_height$_.js'
import { svg_margin$_ } from './svg_margin$_.js'
import { svg_width$_ } from './svg_width$_.js'
export async function set_svg_matrix2d(ctx:Ctx, opts:svg_matrix2d_set_opts_T = {}) {
	const svg_margin =
		opts.svg_margin
		|| svg_margin$_(ctx).$
		|| { top: 20, right: 20, bottom: 60, left: 100 } as Placement
	const svg_width =
		opts.svg_width
		|| svg_width$_(ctx).$
		|| NaN
	const svg_height =
		opts.svg_height
		|| svg_height$_(ctx).$
		|| NaN
	const {
		left,
		right,
		top,
		bottom,
	} = svg_margin
	const svg_content_height = svg_height - top - bottom
	const svg_content_width = svg_width - left - right
	svg_margin$_(ctx).$ = svg_margin
	svg_height$_(ctx).$ = svg_height
	svg_width$_(ctx).$ = svg_width
	svg_content_height$_(ctx).$ = svg_content_height
	svg_content_width$_(ctx).$ = svg_content_width
}
export interface svg_matrix2d_set_opts_T {
	svg_margin?:Placement
	svg_width?:number
	svg_height?:number
}
export type set_svg_matrix2d_T = typeof set_svg_matrix2d

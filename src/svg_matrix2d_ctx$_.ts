import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { svg_margin$_ } from './svg_margin$_.js'
import { svg_width$_ } from './svg_width$_.js'
import { svg_height$_ } from './svg_height$_.js'
import { svg_content_width$_ } from './svg_content_width$_.js'
import { svg_content_height$_ } from './svg_content_height$_.js'
import type { Placement } from './Placement.js'
export const svg_matrix2d_ctx$_:B<svg_matrix2d_ctx$_T> = be_('svg_matrix2d_ctx$', ctx=>
	computed_([
			svg_margin$_(ctx),
			svg_width$_(ctx),
			svg_height$_(ctx),
			svg_content_width$_(ctx),
			svg_content_height$_(ctx),
		],
		(
			svg_margin,
			svg_width,
			svg_height,
			svg_content_width,
			svg_content_height
		)=>({
			svg_margin,
			svg_width,
			svg_height,
			svg_content_width,
			svg_content_height,
		})
	) as svg_matrix2d_ctx$_T
)
export interface svg_matrix2d_ctx_T {
	svg_margin:Placement|undefined
	svg_width:number|undefined
	svg_height:number|undefined
	svg_content_width:number|undefined
	svg_content_height:number|undefined
}
export type svg_matrix2d_ctx$_T = ReadableAtom_<svg_matrix2d_ctx_T>

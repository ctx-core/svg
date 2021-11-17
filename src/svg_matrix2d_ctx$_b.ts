import { B, be_ } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { svg_margin$_b } from './svg_margin$_b.js'
import { svg_width$_b } from './svg_width$_b.js'
import { svg_height$_b } from './svg_height$_b.js'
import { svg_content_width$_b } from './svg_content_width$_b.js'
import { svg_content_height$_b } from './svg_content_height$_b.js'
import type { svg_Ctx } from './svg_Ctx.js'
import type { Placement } from './Placement'
const key = 'svg_matrix2d_ctx$'
export const svg_matrix2d_ctx$_b:B<svg_Ctx, typeof key> = be_(key, ctx=>
	derived([
			svg_margin$_b(ctx),
			svg_width$_b(ctx),
			svg_height$_b(ctx),
			svg_content_width$_b(ctx),
			svg_content_height$_b(ctx),
		],
		([
			 svg_margin,
			 svg_width,
			 svg_height,
			 svg_content_width,
			 svg_content_height
		 ])=>({
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
export type svg_matrix2d_ctx$_T = Readable<svg_matrix2d_ctx_T>
export {
	svg_matrix2d_ctx$_b as b__ctx__matrix2d__svg,
}

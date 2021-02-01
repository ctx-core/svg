import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { $maybe_svg_margin_type, svg_margin_b } from './svg_margin_b'
import { $maybe_svg_width_type, svg_width_b } from './svg_width_b'
import { $maybe_svg_height_type, svg_height_b } from './svg_height_b'
import { $maybe_svg_content_width_type, svg_content_width_b } from './svg_content_width_b'
import { $maybe_svg_content_height_type, svg_content_height_b } from './svg_content_height_b'
export const svg_matrix2d_ctx_b:svg_matrix2d_ctx_b_type = _b('svg_matrix2d_ctx', ctx=>
	derived([
			svg_margin_b(ctx),
			svg_width_b(ctx),
			svg_height_b(ctx),
			svg_content_width_b(ctx),
			svg_content_height_b(ctx),
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
	) as svg_matrix2d_ctx_type
)
export interface $svg_matrix2d_ctx_type {
	svg_margin:$maybe_svg_margin_type
	svg_width:$maybe_svg_width_type
	svg_height:$maybe_svg_height_type
	svg_content_width:$maybe_svg_content_width_type
	svg_content_height:$maybe_svg_content_height_type
}
export interface svg_matrix2d_ctx_type extends Readable<$svg_matrix2d_ctx_type> {}
export interface svg_matrix2d_ctx_b_type extends B<svg_matrix2d_ctx_type> {}
export {
	svg_matrix2d_ctx_b as b__ctx__matrix2d__svg,
}

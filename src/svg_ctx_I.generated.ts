import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { set_svg_matrix2d_T } from './set_svg_matrix2d_b'
import { set_svg_matrix2d_b } from './set_svg_matrix2d_b'
import type { svg_content_height_T } from './svg_content_height_b'
import { svg_content_height_b } from './svg_content_height_b'
import type { svg_content_width_T } from './svg_content_width_b'
import { svg_content_width_b } from './svg_content_width_b'
import type { svg_height_T } from './svg_height_b'
import { svg_height_b } from './svg_height_b'
import type { svg_margin_T } from './svg_margin_b'
import { svg_margin_b } from './svg_margin_b'
import type { svg_matrix2d_ctx_T } from './svg_matrix2d_ctx_b'
import { svg_matrix2d_ctx_b } from './svg_matrix2d_ctx_b'
import type { svg_width_T } from './svg_width_b'
import { svg_width_b } from './svg_width_b'
export interface svg_ctx_I {
	set_svg_matrix2d?:set_svg_matrix2d_T
	svg_content_height?:svg_content_height_T
	svg_content_width?:svg_content_width_T
	svg_height?:svg_height_T
	svg_margin?:svg_margin_T
	svg_matrix2d_ctx?:svg_matrix2d_ctx_T
	svg_width?:svg_width_T
	svg_b_h?:svg_b_h_T
}
export interface svg_b_h_T {
	get set_svg_matrix2d():set_svg_matrix2d_T
	get svg_content_height():svg_content_height_T
	get svg_content_width():svg_content_width_T
	get svg_height():svg_height_T
	get svg_margin():svg_margin_T
	get svg_matrix2d_ctx():svg_matrix2d_ctx_T
	get svg_width():svg_width_T
}
export function svg_b_h_b(ctx:svg_ctx_I):B<svg_ctx_I, 'svg_b_h'> {
	return _b('svg_b_h', ()=>{
		return {
			get set_svg_matrix2d() { return set_svg_matrix2d_b(ctx) },
			get svg_content_height() { return svg_content_height_b(ctx) },
			get svg_content_width() { return svg_content_width_b(ctx) },
			get svg_height() { return svg_height_b(ctx) },
			get svg_margin() { return svg_margin_b(ctx) },
			get svg_matrix2d_ctx() { return svg_matrix2d_ctx_b(ctx) },
			get svg_width() { return svg_width_b(ctx) }
		}
	})
}
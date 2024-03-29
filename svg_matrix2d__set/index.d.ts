import type { ctx_T } from 'ctx-core/be'
import type { Placement } from '../_types/index.js'
export declare function svg_matrix2d__set(
	ctx:ctx_T,
	params?:svg_matrix2d__set_params_T
):Promise<void>
export {
	svg_matrix2d__set as set_svg_matrix2d,
}
export interface svg_matrix2d__set_params_T {
	svg_margin?:Placement;
	svg_width?:number;
	svg_height?:number;
}
export declare type svg_matrix2d__set__opts_T = svg_matrix2d__set_params_T
export declare type svg_matrix2d_set_opts_T = svg_matrix2d__set_params_T
export declare type set_svg_matrix2d_T = typeof svg_matrix2d__set

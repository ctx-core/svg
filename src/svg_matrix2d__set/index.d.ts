import type { Ctx } from '@ctx-core/object'
import type { Placement } from './Placement.js'
export declare function svg_matrix2d__set(
	ctx:Ctx, opts?:svg_matrix2d__set__opts_T
):Promise<void>
export {
	set_svg_matrix2d as svg_matrix2d__set,
}
export interface svg_matrix2d__set__opts_T {
	svg_margin?:Placement;
	svg_width?:number;
	svg_height?:number;
}
export declare type svg_matrix2d_set_opts_T = svg_matrix2d__set__opts_T
export declare type set_svg_matrix2d_T = typeof svg_matrix2d__set

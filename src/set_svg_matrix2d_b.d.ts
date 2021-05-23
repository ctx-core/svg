import type { Placement } from './Placement';
import type { svg_Ctx } from './svg_Ctx';
export declare const set_svg_matrix2d_b: import("@ctx-core/object").Be<svg_Ctx, "set_svg_matrix2d", set_svg_matrix2d_T>;
export interface svg_matrix2d_set_opts_T {
    svg_margin?: Placement;
    svg_width?: number;
    svg_height?: number;
}
export declare type set_svg_matrix2d_T = (opts: svg_matrix2d_set_opts_T) => Promise<void>;
export { set_svg_matrix2d_b as b__set__matrix2d__svg, };

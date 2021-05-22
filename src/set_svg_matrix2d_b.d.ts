import { svg_margin_Ctx } from './svg_margin_b';
import { svg_width_Ctx } from './svg_width_b';
import { svg_height_Ctx } from './svg_height_b';
import { svg_content_width_Ctx } from './svg_content_width_b';
import { svg_content_height_Ctx } from './svg_content_height_b';
import type { Placement } from './Placement';
export interface set_svg_matrix2d_Ctx extends svg_margin_Ctx, svg_width_Ctx, svg_height_Ctx, svg_content_width_Ctx, svg_content_height_Ctx {
    set_svg_matrix2d?: set_svg_matrix2d_T;
}
export declare const set_svg_matrix2d_b: import("@ctx-core/object").Be<set_svg_matrix2d_Ctx, "set_svg_matrix2d", set_svg_matrix2d_T>;
export interface svg_matrix2d_set_opts_T {
    svg_margin?: Placement;
    svg_width?: number;
    svg_height?: number;
}
export declare type set_svg_matrix2d_T = (opts: svg_matrix2d_set_opts_T) => Promise<void>;
export { set_svg_matrix2d_b as b__set__matrix2d__svg, };

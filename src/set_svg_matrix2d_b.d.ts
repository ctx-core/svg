import { B } from '@ctx-core/object';
import type { Placement } from './Placement';
import type { svg_Ctx } from './svg_Ctx';
declare const key = "set_svg_matrix2d";
export declare const set_svg_matrix2d_b: B<svg_Ctx, typeof key>;
export interface svg_matrix2d_set_opts_T {
    svg_margin?: Placement;
    svg_width?: number;
    svg_height?: number;
}
export declare type set_svg_matrix2d_T = (opts: svg_matrix2d_set_opts_T) => Promise<void>;
export { set_svg_matrix2d_b as b__set__matrix2d__svg, };

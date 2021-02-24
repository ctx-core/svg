import { B } from '@ctx-core/object';
import type { Placement } from './Placement';
export declare const set_svg_matrix2d_b: set_svg_matrix2d_b_T;
export interface svg_matrix2d_set_opts_T {
    svg_margin?: Placement;
    svg_width?: number;
    svg_height?: number;
}
export declare type svg_matrix2d_set_opts_type = svg_matrix2d_set_opts_T;
export declare type set_svg_matrix2d_T = (opts: svg_matrix2d_set_opts_T) => Promise<void>;
export declare type set_svg_matrix2d_type = set_svg_matrix2d_T;
export interface set_svg_matrix2d_b_T extends B<set_svg_matrix2d_T> {
}
export declare type set_svg_matrix2d_b_type = set_svg_matrix2d_b_T;
export { set_svg_matrix2d_b as b__set__matrix2d__svg, };

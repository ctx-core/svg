import { B } from '@ctx-core/object';
import type { Placement } from './Placement';
export declare const set_svg_matrix2d_b: set_svg_matrix2d_b_type;
export interface svg_matrix2d_set_opts_type {
    svg_margin?: Placement;
    svg_width?: number;
    svg_height?: number;
}
export declare type set_svg_matrix2d_type = (opts: svg_matrix2d_set_opts_type) => Promise<void>;
export interface set_svg_matrix2d_b_type extends B<set_svg_matrix2d_type> {
}
export { set_svg_matrix2d_b as b__set__matrix2d__svg, };

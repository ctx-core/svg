import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
import { maybe_svg_margin_T } from './svg_margin$_b';
import { maybe_svg_width_T } from './svg_width$_b';
import { maybe_svg_height_T } from './svg_height$_b';
import { maybe_svg_content_width_T } from './svg_content_width$_b';
import { maybe_svg_content_height_T } from './svg_content_height$_b';
import type { svg_Ctx } from './svg_Ctx';
declare const key = "svg_matrix2d_ctx$";
export declare const svg_matrix2d_ctx$_b: B<svg_Ctx, typeof key>;
export interface svg_matrix2d_ctx_T {
    svg_margin: maybe_svg_margin_T;
    svg_width: maybe_svg_width_T;
    svg_height: maybe_svg_height_T;
    svg_content_width: maybe_svg_content_width_T;
    svg_content_height: maybe_svg_content_height_T;
}
export interface svg_matrix2d_ctx$_T extends Readable<svg_matrix2d_ctx_T> {
}
export { svg_matrix2d_ctx$_b as b__ctx__matrix2d__svg, };

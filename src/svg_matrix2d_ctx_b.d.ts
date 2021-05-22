import { Readable } from '@ctx-core/store';
import { $maybe_svg_margin_T, svg_margin_Ctx } from './svg_margin_b';
import { $maybe_svg_width_T, svg_width_Ctx } from './svg_width_b';
import { $maybe_svg_height_T, svg_height_Ctx } from './svg_height_b';
import { $maybe_svg_content_width_T, svg_content_width_Ctx } from './svg_content_width_b';
import { $maybe_svg_content_height_T, svg_content_height_Ctx } from './svg_content_height_b';
export interface svg_matrix2d_ctx_Ctx extends svg_margin_Ctx, svg_width_Ctx, svg_height_Ctx, svg_content_width_Ctx, svg_content_height_Ctx {
    svg_matrix2d_ctx?: svg_matrix2d_ctx_T;
}
export declare const svg_matrix2d_ctx_b: import("@ctx-core/object").Be<svg_matrix2d_ctx_Ctx, "svg_matrix2d_ctx", svg_matrix2d_ctx_T>;
export interface $svg_matrix2d_ctx_T {
    svg_margin: $maybe_svg_margin_T;
    svg_width: $maybe_svg_width_T;
    svg_height: $maybe_svg_height_T;
    svg_content_width: $maybe_svg_content_width_T;
    svg_content_height: $maybe_svg_content_height_T;
}
export interface svg_matrix2d_ctx_T extends Readable<$svg_matrix2d_ctx_T> {
}
export { svg_matrix2d_ctx_b as b__ctx__matrix2d__svg, };

import type { set_svg_matrix2d_T } from './set_svg_matrix2d_b';
import type { svg_margin_T } from './svg_margin_b';
import type { svg_width_T } from './svg_width_b';
import type { svg_content_height_T } from './svg_content_height_b';
import type { svg_height_T } from './svg_height_b';
import type { svg_content_width_T } from './svg_content_width_b';
import type { svg_matrix2d_ctx_T } from './svg_matrix2d_ctx_b';
export interface svg_Ctx {
    set_svg_matrix2d?: set_svg_matrix2d_T;
    svg_content_height?: svg_content_height_T;
    svg_content_width?: svg_content_width_T;
    svg_height?: svg_height_T;
    svg_margin?: svg_margin_T;
    svg_matrix2d_ctx?: svg_matrix2d_ctx_T;
    svg_width?: svg_width_T;
}

import { Readable } from '@ctx-core/store';
import { $maybe_svg_margin_type } from './svg_margin_b';
import { $maybe_svg_width_type } from './svg_width_b';
import { $maybe_svg_height_type } from './svg_height_b';
import { $maybe_svg_content_width_type } from './svg_content_width_b';
import { $maybe_svg_content_height_type } from './svg_content_height_b';
export declare const svg_matrix2d_ctx_b: import("@ctx-core/object").be_type<svg_matrix2d_ctx_type, object>;
export interface $svg_matrix2d_ctx_type {
    svg_margin: $maybe_svg_margin_type;
    svg_width: $maybe_svg_width_type;
    svg_height: $maybe_svg_height_type;
    svg_content_width: $maybe_svg_content_width_type;
    svg_content_height: $maybe_svg_content_height_type;
}
export interface svg_matrix2d_ctx_type extends Readable<$svg_matrix2d_ctx_type> {
}
export { svg_matrix2d_ctx_b as b__ctx__matrix2d__svg, };

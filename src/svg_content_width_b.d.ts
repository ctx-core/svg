import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export interface svg_content_width_Ctx {
    svg_content_width?: svg_content_width_T;
}
export declare const svg_content_width_b: import("@ctx-core/object").Be<svg_content_width_Ctx, "svg_content_width", svg_content_width_T>;
export declare type $svg_content_width_T = number;
export declare type $maybe_svg_content_width_T = maybe_null<$svg_content_width_T>;
export interface svg_content_width_T extends Writable<$maybe_svg_content_width_T> {
}
export { svg_content_width_b as b__width__content__svg, };

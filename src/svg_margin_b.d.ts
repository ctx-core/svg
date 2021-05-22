import { Writable } from '@ctx-core/store';
import type { Placement } from './Placement';
export interface svg_margin_Ctx {
    svg_margin?: svg_margin_T;
}
export declare const svg_margin_b: import("@ctx-core/object").Be<svg_margin_Ctx, "svg_margin", svg_margin_T>;
export declare type $svg_margin_T = Placement;
export declare type $maybe_svg_margin_T = $svg_margin_T | undefined;
export interface svg_margin_T extends Writable<$maybe_svg_margin_T> {
}
export { svg_margin_b as b__margin__svg, };

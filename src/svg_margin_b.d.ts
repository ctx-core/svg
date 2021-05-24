import { Writable } from '@ctx-core/store';
import type { Placement } from './Placement';
import type { svg_Ctx } from './svg_Ctx';
export declare const svg_margin_b: (ctx: svg_Ctx, opts?: import("@ctx-core/object")._be_opts_T | undefined) => svg_margin_T;
export declare type $svg_margin_T = Placement;
export declare type $maybe_svg_margin_T = $svg_margin_T | undefined;
export interface svg_margin_T extends Writable<$maybe_svg_margin_T> {
}
export { svg_margin_b as b__margin__svg, };

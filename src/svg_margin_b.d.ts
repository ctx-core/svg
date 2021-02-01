import { B } from '@ctx-core/object';
import { Writable } from '@ctx-core/store';
import type { Placement } from './Placement';
export declare const svg_margin_b: svg_margin_b_type;
export declare type $svg_margin_type = Placement;
export declare type $maybe_svg_margin_type = $svg_margin_type | null;
export interface svg_margin_type extends Writable<$maybe_svg_margin_type> {
}
export interface svg_margin_b_type extends B<svg_margin_type> {
}
export { svg_margin_b as b__margin__svg, };

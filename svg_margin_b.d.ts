import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
import type { Placement } from './Placement';
export declare const svg_margin_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => svg_margin_type;
export declare type $svg_margin_type = Placement;
export declare type $maybe_svg_margin_type = maybe_null<$svg_margin_type>;
export declare type svg_margin_type = Writable<$maybe_svg_margin_type>;
export { svg_margin_b as b__margin__svg, $svg_margin_type as $type__margin__svg, $maybe_svg_margin_type as $maybe_type__margin__svg, svg_margin_type as type__margin__svg, };

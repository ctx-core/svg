import { Writable, Readable } from '@ctx-core/store';
import type { maybe_null } from '@ctx-core/function';
export declare type $type__margin__svg = Placement;
export declare type $maybe_type__margin__svg = maybe_null<$type__margin__svg>;
export declare type type__margin__svg = Writable<$maybe_type__margin__svg>;
export declare const b__margin__svg: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__margin__svg;
export declare const __margin__svg: type__margin__svg;
export declare type $type__width__svg = number;
export declare type $maybe_type__width__svg = maybe_null<$type__width__svg>;
export declare type type__width__svg = Writable<$maybe_type__width__svg>;
export declare const b__width__svg: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__width__svg;
export declare const __width__svg: type__width__svg;
export declare type $type__height__svg = number;
export declare type $maybe_type__height__svg = maybe_null<$type__height__svg>;
export declare type type__height__svg = Writable<$maybe_type__height__svg>;
export declare const b__height__svg: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__height__svg;
export declare const __height__svg: type__height__svg;
export declare type $type__width__content__svg = number;
export declare type $maybe_type__width__content__svg = maybe_null<$type__width__content__svg>;
export declare type type__width__content__svg = Writable<$maybe_type__width__content__svg>;
export declare const b__width__content__svg: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__width__content__svg;
export declare const __width__content__svg: type__width__content__svg;
export declare type $type__height__content__svg = number;
export declare type $maybe_type__height__content__svg = maybe_null<$type__height__content__svg>;
export declare type type__height__content__svg = Writable<$maybe_type__height__content__svg>;
export declare const b__height__content__svg: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__height__content__svg;
export declare const __height__content__svg: type__height__content__svg;
export interface $type__ctx__matrix2d__svg {
    margin__svg: $maybe_type__margin__svg;
    width__svg: $maybe_type__width__svg;
    height__svg: $maybe_type__height__svg;
    width__content__svg: $maybe_type__width__content__svg;
    height__content__svg: $maybe_type__height__content__svg;
}
export declare type type__ctx__matrix2d__svg = Readable<$type__ctx__matrix2d__svg>;
export declare const b__ctx__matrix2d__svg: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__ctx__matrix2d__svg;
export declare const __ctx__matrix2d__svg: type__ctx__matrix2d__svg;
export interface Placement {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface Opts__set__matrix2d__svg {
    margin__svg?: Placement;
    width__svg?: number;
    height__svg?: number;
}
export declare const b__set__matrix2d__svg: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => (opts?: Opts__set__matrix2d__svg) => Promise<void>;
export declare const set__matrix2d__svg: (opts?: Opts__set__matrix2d__svg) => Promise<void>;

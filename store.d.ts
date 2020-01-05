export declare const b__margin__svg: (ctx?: any, opts?: any) => import("svelte/store").Writable<any>;
export declare const __margin__svg: import("svelte/store").Writable<any>;
export declare const b__width__svg: (ctx?: any, opts?: any) => import("svelte/store").Writable<any>;
export declare const __width__svg: import("svelte/store").Writable<any>;
export declare const b__height__svg: (ctx?: any, opts?: any) => import("svelte/store").Writable<any>;
export declare const __height__svg: import("svelte/store").Writable<any>;
export declare const b__width__content__svg: (ctx?: any, opts?: any) => import("svelte/store").Writable<any>;
export declare const __width__content__svg: import("svelte/store").Writable<any>;
export declare const b__height__content__svg: (ctx?: any, opts?: any) => import("svelte/store").Writable<any>;
export declare const __height__content__svg: import("svelte/store").Writable<any>;
export declare const b__ctx__matrix2d__svg: (ctx?: any, opts?: any) => import("svelte/store").Readable<{
    margin__svg: any;
    width__svg: any;
    height__svg: any;
    width__content__svg: any;
    height__content__svg: any;
}>;
export declare const __ctx__matrix2d__svg: import("svelte/store").Readable<{
    margin__svg: any;
    width__svg: any;
    height__svg: any;
    width__content__svg: any;
    height__content__svg: any;
}>;
export declare type Placement = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};
export declare type Opts__set__matrix2d__svg = {
    margin__svg?: Placement;
    width__svg?: number;
    height__svg?: number;
};
export declare const b__set__matrix2d__svg: (ctx?: any, opts?: any) => (opts?: Opts__set__matrix2d__svg) => Promise<void>;
export declare const set__matrix2d__svg: (opts?: Opts__set__matrix2d__svg) => Promise<void>;

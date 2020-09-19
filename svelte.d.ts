import '@ctx-core/svelte/preprocess';
export declare type _markup_builder_opts_type = {
    _match?: ({ filename: string }: {
        filename: any;
    }) => string;
};
/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export declare function _markup(builder_opts?: _markup_builder_opts_type): (opts: any) => Promise<{
    code: any;
    map: null;
} | undefined>;
export declare const markup: (opts: any) => Promise<{
    code: any;
    map: null;
} | undefined>;
export declare const markup__markdown: (opts: any) => Promise<{
    code: any;
    map: null;
} | undefined>;
export declare function _preprocess__svg(opts__builder?: {}): {
    markup: (opts: any) => Promise<{
        code: any;
        map: null;
    } | undefined>;
};

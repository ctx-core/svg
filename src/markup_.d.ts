/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export declare function markup_(builder_opts?: _markup_builder_opts_T): markup_T;
export interface _markup_builder_opts_T {
    match_?: (opts: _match_opts_T) => string;
}
export declare type _markup_builder_opts_type = _markup_builder_opts_T;
export interface _match_opts_T {
    filename: string;
    content: string;
}
export declare type _match_opts_type = _match_opts_T;
export interface _markup_fn_return_T {
    code: any;
    map: null;
}
export declare type _markup_fn_return_type = _markup_fn_return_T;
export declare type markup_T = (opts: _match_opts_T) => Promise<_markup_fn_return_T | undefined>;
export declare type markup_type = markup_T;
export { markup_ as _markup, };

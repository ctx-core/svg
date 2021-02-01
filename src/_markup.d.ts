/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export declare function _markup(builder_opts?: _markup_builder_opts_type): _markup_return_type;
export interface _markup_builder_opts_type {
    _match?: (opts: _match_opts_type) => string;
}
export interface _match_opts_type {
    filename: string;
    content: string;
}
export interface _markup_fn_return_type {
    code: any;
    map: null;
}
export declare type _markup_return_type = (opts: _match_opts_type) => Promise<_markup_fn_return_type | undefined>;

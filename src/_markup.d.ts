/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export declare function _markup(builder_opts?: _markup_builder_opts_type): (opts: any) => Promise<{
    code: any;
    map: null;
} | undefined>;
export interface _markup_builder_opts_type {
    _match?: ({ filename: string }: {
        filename: any;
    }) => string;
}

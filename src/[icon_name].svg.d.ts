import type { Request, Response } from 'express';
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 */
export declare function _get(opts?: _get_opts_T): (req: Request, res: Response) => Promise<void>;
export declare type _get_T = (opts?: _get_opts_T) => get_T;
export declare type _get_type = _get_T;
export declare type get_T = (req: Request, res: Response) => Promise<void>;
export declare type get_type = get_T;
export interface _get_opts_type_fn_req_T {
    fn(req: Request, res: Response): Promise<void>;
}
export declare type _get_opts_type_fn_req_type = _get_opts_type_fn_req_T;
export interface _get_opts_T {
    fn?: (req: Request, res: Response) => Promise<any>;
    resolve?: (path: string) => Promise<string>;
}
export declare type _get_opts_type = _get_opts_T;

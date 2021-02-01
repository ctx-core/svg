import type { Request, Response } from 'express';
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 */
export declare function _get(opts?: _get_opts_type): (req: Request, res: Response) => Promise<void>;
export declare type _get_type = (opts?: _get_opts_type) => get_type;
export declare type get_type = (req: Request, res: Response) => Promise<void>;
export interface _get_opts_type_fn_req_type {
    fn(req: Request, res: Response): Promise<void>;
}
export interface _get_opts_type {
    fn?: (req: Request, res: Response) => Promise<any>;
    resolve?: (path: string) => Promise<string>;
}

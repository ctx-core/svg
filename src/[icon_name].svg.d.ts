import type { Request, Response } from 'express';
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 */
export declare function get_(opts?: get_opts__T): (req: Request, res: Response) => Promise<void>;
export declare type get__T = (opts?: get_opts__T) => get_T;
export declare type _get_T = get__T;
export declare type _get_type = get__T;
export declare type get_T = (req: Request, res: Response) => Promise<void>;
export declare type get_type = get_T;
export interface get_opts_type_fn_req__T {
    fn(req: Request, res: Response): Promise<void>;
}
export declare type _get_opts_type_fn_req_T = get_opts_type_fn_req__T;
export declare type _get_opts_type_fn_req_type = get_opts_type_fn_req__T;
export interface get_opts__T {
    fn?: (req: Request, res: Response) => Promise<any>;
    resolve?: (path: string) => Promise<string>;
}
export declare type _get_opts_T = get_opts__T;
export declare type _get_opts_type = get_opts__T;

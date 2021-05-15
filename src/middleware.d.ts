import type { Request, Response } from 'express';
export interface _get_svg_params_I {
    dir: string;
}
export declare function _get_svg({ dir }: _get_svg_params_I): (req: Request, res: Response) => Promise<void>;
export { _get_svg as _get__svg };

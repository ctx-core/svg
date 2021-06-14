import type { Request, Response } from 'express';
export interface get_svg_params__I {
    dir: string;
}
export declare function get_svg_({ dir }: get_svg_params__I): (req: Request, res: Response) => Promise<void>;
export { get_svg_ as _get_svg, get_svg_ as _get__svg, };

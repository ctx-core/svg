export interface svg__get__params_T {
	dir:string
}
export declare type get_svg_params__I = svg__get__params_T
export declare function svg__get_(
	params:svg__get__params_T
):(req:Request, res:Response)=>Promise<void>
export {
	svg__get_ as get_svg_,
	svg__get_ as _get_svg,
	svg__get_ as _get__svg,
}

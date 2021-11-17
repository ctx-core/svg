import { markup_, markup_builder_opts__T, markup_T } from './markup_.js'
export function svg_preprocess_(builder_opts:markup_builder_opts__T = {}):svg_preprocess_T {
	const markup = markup_(builder_opts)
	return { markup, }
}
export {
	svg_preprocess_ as _svg_preprocess,
}
export interface svg_preprocess_T {
	markup:markup_T
}
export type svg_preprocess_type = svg_preprocess_T

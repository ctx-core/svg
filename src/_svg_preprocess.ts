import { markup_, markup_T } from './markup_'
export function _svg_preprocess(builder_opts = {}):svg_preprocess_T {
	const markup = markup_(builder_opts)
	return {
		markup,
	}
}
export interface svg_preprocess_T {
	markup:markup_T
}
export type svg_preprocess_type = svg_preprocess_T

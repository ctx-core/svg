import { _markup, markup_T } from './_markup'
export function _svg_preprocess(builder_opts = {}):svg_preprocess_T {
	const markup = _markup(builder_opts)
	return {
		markup,
	}
}
export interface svg_preprocess_T {
	markup:markup_T
}
export type svg_preprocess_type = svg_preprocess_T

import { _markup, markup_type } from './_markup'
export function _svg_preprocess(builder_opts = {}):svg_preprocess_type {
	const markup = _markup(builder_opts)
	return {
		markup,
	}
}
export interface svg_preprocess_type {
	markup:markup_type
}
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { svg_content_height__ } from '../svg_content_height__/index.js'
import { svg_content_width__ } from '../svg_content_width__/index.js'
import { svg_height__ } from '../svg_height__/index.js'
import { svg_margin__ } from '../svg_margin__/index.js'
import { svg_width__ } from '../svg_width__/index.js'
export const svg_matrix2d_o__ = be_('svg_matrix2d_o__', ctx=>
	computed_([
		svg_margin__(ctx),
		svg_width__(ctx),
		svg_height__(ctx),
		svg_content_width__(ctx),
		svg_content_height__(ctx)
	], (
		svg_margin,
		svg_width,
		svg_height,
		svg_content_width,
		svg_content_height
	)=>({
		svg_margin,
		svg_width,
		svg_height,
		svg_content_width,
		svg_content_height
	})))
export {
	svg_matrix2d_o__ as svg_matrix2d_ctx__,
	svg_matrix2d_o__ as svg_matrix2d_ctx$_
}

import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { svg_content_height_ } from '../svg_content_height/index.js'
import { svg_content_width_ } from '../svg_content_width/index.js'
import { svg_height_ } from '../svg_height/index.js'
import { svg_margin_ } from '../svg_margin/index.js'
import { svg_width_ } from '../svg_width/index.js'
export const [
	svg_matrix2d_o$_,
	svg_matrix2d_o_,
] = val__be_computed_pair_('svg_matrix2d_o', ctx=>({
	svg_margin: svg_margin_(ctx),
	svg_width: svg_width_(ctx),
	svg_height: svg_height_(ctx),
	svg_content_width: svg_content_width_(ctx),
	svg_content_height: svg_content_height_(ctx),
}))
export {
	svg_matrix2d_o$_ as svg_matrix2d_o__,
	svg_matrix2d_o$_ as svg_matrix2d_ctx__,
	svg_matrix2d_o$_ as svg_matrix2d_ctx$_
}

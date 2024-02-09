/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { svg_content_height__set } from '../svg_content_height/index.js'
import { svg_content_width__set } from '../svg_content_width/index.js'
import { svg_height_, svg_height__set } from '../svg_height/index.js'
import { svg_margin_, svg_margin__set } from '../svg_margin/index.js'
import { svg_width_, svg_width__set } from '../svg_width/index.js'
/**
 * @param {ctx_T}ctx
 * @param {svg_matrix2d__set_params_T}[params]
 * @returns {Promise<void>}
 */
export async function svg_matrix2d__set(ctx, params = {}) {
	const svg_margin = params.svg_margin || svg_margin_(ctx) || {
		top: 20,
		right: 20,
		bottom: 60,
		left: 100
	}
	const svg_width = params.svg_width || svg_width_(ctx) || NaN
	const svg_height = params.svg_height || svg_height_(ctx) || NaN
	const {
		left,
		right,
		top,
		bottom
	} = svg_margin
	const svg_content_height = svg_height - top - bottom
	const svg_content_width = svg_width - left - right
	svg_margin__set(ctx, svg_margin)
	svg_height__set(ctx, svg_height)
	svg_width__set(ctx, svg_width)
	svg_content_height__set(ctx, svg_content_height)
	svg_content_width__set(ctx, svg_content_width)
}

import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import type { Placement } from './Placement.js'
import { svg_content_height__ } from './svg_content_height__.js'
import { svg_content_width__ } from './svg_content_width__.js'
import { svg_height__ } from './svg_height__.js'
import { svg_margin__ } from './svg_margin__.js'
import { svg_width__ } from './svg_width__.js'
export const svg_matrix2d_ctx__:B<ReadableAtom_<svg_matrix2d_ctx_T>> = be_('svg_matrix2d_ctx__', ctx=>
	computed_([
			svg_margin__(ctx),
			svg_width__(ctx),
			svg_height__(ctx),
			svg_content_width__(ctx),
			svg_content_height__(ctx),
		],
		(
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
			svg_content_height,
		})))
export interface svg_matrix2d_ctx_T {
	svg_margin:Placement|undefined
	svg_width:number|undefined
	svg_height:number|undefined
	svg_content_width:number|undefined
	svg_content_height:number|undefined
}
export { svg_matrix2d_ctx__ as svg_matrix2d_ctx$_ }

import { be_ } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx'
const key = 'svg_content_height$'
export const svg_content_height$_b = be_<svg_Ctx, typeof key>(key, ()=>
	writable(undefined) as svg_content_height$_T
)
export type svg_content_height_T = number
export type maybe_svg_content_height_T = svg_content_height_T|undefined
export interface svg_content_height$_T extends Writable<maybe_svg_content_height_T> {}
export {
	svg_content_height$_b as b__height__content__svg,
}

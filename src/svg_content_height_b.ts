import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx'
const key = 'svg_content_height'
export const svg_content_height_b = _b<svg_Ctx, typeof key>(key, ()=>
	writable(undefined) as svg_content_height_T
)
export type $svg_content_height_T = number
export type $maybe_svg_content_height_T = $svg_content_height_T|undefined
export interface svg_content_height_T extends Writable<$maybe_svg_content_height_T> {}
export {
	svg_content_height_b as b__height__content__svg,
}

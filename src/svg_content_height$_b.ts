import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx.js'
const key = 'svg_content_height$'
export const svg_content_height$_b:B<svg_Ctx, typeof key> = be_(key, ()=>
	writable$(undefined) as svg_content_height$_T
)
export type svg_content_height$_T = Writable$<number|undefined>
export {
	svg_content_height$_b as b__height__content__svg,
}

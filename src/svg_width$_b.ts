import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { svg_Ctx } from './svg_Ctx.js'
const key = 'svg_width$'
export const svg_width$_b:B<svg_Ctx, typeof key> = be_(key, ()=>
	writable$(undefined) as svg_width$_T
)
export type svg_width$_T = Writable$<number|undefined>
export {
	svg_width$_b as b__width__svg,
}

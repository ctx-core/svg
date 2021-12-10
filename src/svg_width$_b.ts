import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'svg_width$'
export const svg_width$_b:B<svg_width$_T> = be_(key, ()=>
	writable$(undefined) as svg_width$_T
)
export type svg_width$_T = Writable$<number|undefined>
export {
	svg_width$_b as b__width__svg,
}

import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { Placement } from './Placement.js'
const key = 'svg_margin$'
export const svg_margin$_b:B<svg_margin$_T> = be_(key, ()=>
	writable$(undefined) as svg_margin$_T
)
export type svg_margin$_T = Writable$<Placement|undefined>
export {
	svg_margin$_b as b__margin__svg,
}

import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'svg_height$'
export const svg_height$_b:B<svg_height$_T> = be_(key, ()=>
	writable$(undefined) as svg_height$_T
)
export type svg_height$_T = Writable$<number|undefined>
export {
	svg_height$_b as b__height__svg,
}

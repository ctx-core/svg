import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'svg_height$'
export const svg_height$_b:B<svg_height$_T> = be_(key, ()=>
	atom$(undefined) as svg_height$_T
)
export type svg_height$_T = WritableAtom$<number|undefined>
export {
	svg_height$_b as b__height__svg,
}

import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'svg_height$'
export const svg_height$_:B<svg_height$_T> = be_(key, ()=>
	atom$(undefined) as svg_height$_T
)
export type svg_height$_T = WritableAtom$<number|undefined>

import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'svg_width$'
export const svg_width$_:B<svg_width$_T> = be_(key, ()=>
	atom$(undefined) as svg_width$_T
)
export type svg_width$_T = WritableAtom$<number|undefined>

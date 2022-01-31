import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import type { Placement } from './Placement.js'
const key = 'svg_margin$'
export const svg_margin$_:B<svg_margin$_T> = be_(key, ()=>
	atom$(undefined) as svg_margin$_T
)
export type svg_margin$_T = WritableAtom$<Placement|undefined>

import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import type { Placement } from './Placement.js'
export const svg_margin$_:B<svg_margin$_T> = be_('svg_margin$', ()=>
	atom$(undefined) as svg_margin$_T
)
export type svg_margin$_T = WritableAtom$<Placement|undefined>

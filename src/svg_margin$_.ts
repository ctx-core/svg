import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import type { Placement } from './Placement.js'
export const svg_margin$_:B<svg_margin$_T> = be_('svg_margin$', ()=>
	atom_(undefined) as svg_margin$_T
)
export type svg_margin$_T = WritableAtom_<Placement|undefined>

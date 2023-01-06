import { atom_, type WritableAtom_ } from '@ctx-core/nanostores'
import { type Be, be_ } from '@ctx-core/object'
import type { Placement } from './Placement.js'
export const svg_margin__:Be<WritableAtom_<Placement>> = be_('svg_margin__', ()=>
	atom_<Placement>(undefined))

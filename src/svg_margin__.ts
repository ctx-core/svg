import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import type { Placement } from './Placement.js'
export const svg_margin__:B<WritableAtom_<Placement|undefined>> = be_('svg_margin__', ()=>
	atom_(undefined))

import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const svg_width$_:B<svg_width$_T> = be_('svg_width$', ()=>
	atom_(undefined) as svg_width$_T
)
export type svg_width$_T = WritableAtom_<number|undefined>

import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const svg_width$_:B<svg_width$_T> = be_('svg_width$', ()=>
	atom$(undefined) as svg_width$_T
)
export type svg_width$_T = WritableAtom$<number|undefined>

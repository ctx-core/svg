import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const svg_content_height$_:B<svg_content_height$_T> = be_('svg_content_height$', ()=>
	atom_(undefined) as svg_content_height$_T
)
export type svg_content_height$_T = WritableAtom_<number|undefined>

import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'svg_content_width$'
export const svg_content_width$_:B<svg_content_width$_T> = be_(key, ()=>
	atom$(undefined) as svg_content_width$_T
)
export type svg_content_width$_T = WritableAtom$<number|undefined>

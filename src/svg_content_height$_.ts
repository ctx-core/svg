import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'svg_content_height$'
export const svg_content_height$_:B<svg_content_height$_T> = be_(key, ()=>
	atom$(undefined) as svg_content_height$_T
)
export type svg_content_height$_T = WritableAtom$<number|undefined>

import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'svg_width$'
export const svg_width$_b:B<svg_width$_T> = be_(key, ()=>
	atom$(undefined) as svg_width$_T
)
export type svg_width$_T = WritableAtom$<number|undefined>
export {
	svg_width$_b as b__width__svg,
}

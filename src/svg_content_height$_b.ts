import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'svg_content_height$'
export const svg_content_height$_b:B<svg_content_height$_T> = be_(key, ()=>
	atom$(undefined) as svg_content_height$_T
)
export type svg_content_height$_T = WritableAtom$<number|undefined>
export {
	svg_content_height$_b as b__height__content__svg,
}

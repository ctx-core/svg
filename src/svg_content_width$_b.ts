import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'svg_content_width$'
export const svg_content_width$_b:B<svg_content_width$_T> = be_(key, ()=>
	writable$(undefined) as svg_content_width$_T
)
export type svg_content_width$_T = Writable$<number|undefined>
export {
	svg_content_width$_b as b__width__content__svg,
}

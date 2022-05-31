import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
export const svg_width__ = be_<WritableAtom_<number|undefined>>('svg_width_', ()=>
	atom_(undefined) as WritableAtom_<number|undefined>)
export { svg_width__ as svg_width$_ }

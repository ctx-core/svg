import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
export const svg_height__ = be_<WritableAtom_<number|undefined>>('svg_height__', ()=>
	atom_(undefined))

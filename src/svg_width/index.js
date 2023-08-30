import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	svg_width$_,
	svg_width_,
	svg_width__set,
] = be_atom_triple_('svg_width', ()=>
	atom_(undefined))
export { svg_width$_ as svg_width__ }

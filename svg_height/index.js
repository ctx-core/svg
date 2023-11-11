import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	svg_height$_,
	svg_height_,
	svg_height__set,
] = be_atom_triple_('svg_height', ()=>
	atom_(undefined))
export { svg_height$_ as svg_height__ }

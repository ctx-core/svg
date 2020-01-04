import { writable, derived } from 'svelte/store'
import { _b } from '@ctx-core/object'
export const b__margin__svg = _b('__margin__svg', ()=>
	writable(null))
export const __margin__svg = b__margin__svg()
export const b__width__svg = _b('__width__svg', ()=>
	writable(null))
export const __width__svg = b__width__svg()
export const b__height__svg = _b('__height__svg', ()=>
	writable(null))
export const __height__svg = b__height__svg()
export const b__width__content__svg = _b('__width__content__svg', ()=>
	writable(null))
export const __width__content__svg = b__width__content__svg()
export const b__height__content__svg = _b('__height__content__svg', ()=>
	writable(null))
export const __height__content__svg = b__height__content__svg()
export const b__ctx__matrix2d__svg = _b('__ctx__matrix2d__svg', ctx=>
	derived([
			b__margin__svg(ctx),
			b__width__svg(ctx),
			b__height__svg(ctx),
			b__width__content__svg(ctx),
			b__height__content__svg(ctx),
		],
		([
			 margin__svg,
			 width__svg,
			 height__svg,
			 width__content__svg,
			 height__content__svg
		 ])=>({
			margin__svg,
			width__svg,
			height__svg,
			width__content__svg,
			height__content__svg,
		})))
export const __ctx__matrix2d__svg = b__ctx__matrix2d__svg()

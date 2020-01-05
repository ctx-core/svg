import { writable, derived, get } from 'svelte/store'
import { _b } from '@ctx-core/object'
import { log } from '@ctx-core/logger'
const logPrefix = '@ctx-core/svg/store.js'
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
export type Placement = {
	top?:number
	right?:number
	bottom?:number
	left?:number
}
export type Opts__set__matrix2d__svg = {
	margin__svg?:Placement
	width__svg?:number
	height__svg?:number
}
export const b__set__matrix2d__svg = _b('set__matrix2d__svg', ctx=>{
	return set__matrix2d__svg
	async function set__matrix2d__svg(
		opts:Opts__set__matrix2d__svg = {}
	) {
		log(`${logPrefix}|set__matrix2d__svg`)
		const margin__svg =
			opts.margin__svg
			|| get(b__margin__svg(ctx))
			|| { top: 20, right: 20, bottom: 60, left: 100 }
		const width__svg =
			opts.width__svg
			|| get(b__width__svg(ctx))
		const height__svg =
			opts.height__svg
			|| get(b__height__svg(ctx))
		const {
			left,
			right,
			top,
			bottom,
		} = margin__svg
		const width__content__svg = width__svg - left - right
		const height__content__svg = height__svg - top - bottom
		b__margin__svg(ctx).set(margin__svg)
		b__width__svg(ctx).set(width__svg)
		b__height__svg(ctx).set(height__svg)
		b__width__content__svg(ctx).set(width__content__svg)
		b__height__content__svg(ctx).set(height__content__svg)
	}
})
export const set__matrix2d__svg = b__set__matrix2d__svg()

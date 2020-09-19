import { writable, derived, get, Writable, Readable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
export type $type__margin__svg = Placement
export type $maybe_type__margin__svg = maybe_null<$type__margin__svg>
export type type__margin__svg = Writable<$maybe_type__margin__svg>
export const b__margin__svg = _b<type__margin__svg>('__margin__svg', ()=>
	writable(null))
export const __margin__svg = b__margin__svg()
export type $type__width__svg = number
export type $maybe_type__width__svg = maybe_null<$type__width__svg>
export type type__width__svg = Writable<$maybe_type__width__svg>
export const b__width__svg = _b<type__width__svg>('__width__svg', ()=>
	writable(null))
export const __width__svg = b__width__svg()
export type $type__height__svg = number
export type $maybe_type__height__svg = maybe_null<$type__height__svg>
export type type__height__svg = Writable<$maybe_type__height__svg>
export const b__height__svg = _b<type__height__svg>('__height__svg', ()=>
	writable(null))
export const __height__svg = b__height__svg()
export type $type__width__content__svg = number
export type $maybe_type__width__content__svg = maybe_null<$type__width__content__svg>
export type type__width__content__svg = Writable<$maybe_type__width__content__svg>
export const b__width__content__svg = _b<type__width__content__svg>('__width__content__svg', ()=>
	writable(null))
export const __width__content__svg = b__width__content__svg()
export type $type__height__content__svg = number
export type $maybe_type__height__content__svg = maybe_null<$type__height__content__svg>
export type type__height__content__svg = Writable<$maybe_type__height__content__svg>
export const b__height__content__svg = _b<type__height__content__svg>('__height__content__svg', ()=>
	writable(null))
export const __height__content__svg = b__height__content__svg()
export type $type__ctx__matrix2d__svg = {
	margin__svg:$maybe_type__margin__svg
	width__svg:$maybe_type__width__svg
	height__svg:$maybe_type__height__svg
	width__content__svg:$maybe_type__width__content__svg
	height__content__svg:$maybe_type__height__content__svg
}
export type type__ctx__matrix2d__svg = Readable<$type__ctx__matrix2d__svg>
export const b__ctx__matrix2d__svg = _b<type__ctx__matrix2d__svg>('__ctx__matrix2d__svg', ctx=>
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
		})
	)
)
export const __ctx__matrix2d__svg = b__ctx__matrix2d__svg()
export type Placement = {
	top:number
	right:number
	bottom:number
	left:number
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
		const margin__svg =
			opts.margin__svg
			|| get<$type__margin__svg>(b__margin__svg(ctx))
			|| { top: 20, right: 20, bottom: 60, left: 100 } as $type__margin__svg
		const width__svg =
			opts.width__svg
			|| get<$type__width__svg>(b__width__svg(ctx))
			|| NaN
		const height__svg =
			opts.height__svg
			|| get(b__height__svg(ctx))
			|| NaN
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

import type { Request, Response } from 'express'
import type { Element } from 'domhandler'
import getOuterHTML from 'dom-serializer'
import fs from 'fs'
import { DomHandler, Parser } from 'htmlparser2'
import resolve from 'resolve'
import { promisify } from 'util'
const resolve_async = promisify(resolve)
import { find } from '@ctx-core/array'
import { throw_not_found } from '@ctx-core/error'
import { assign } from '@ctx-core/object'
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 */
export function svg_get_(opts:get_opts__T = {}) {
	const { fn } = opts
	const resolve = opts.resolve || resolve_async
	if (typeof resolve !== 'function') throw 'opts.resolve must be a function'
	return async function get(req:Request, res:Response) {
		res.setHeader('Content-Type', 'image/svg+xml')
		const { icon_name } = req.params
		const { style } = req.query
		if (fn) await fn(req, res)
		let svg = ''
		const handler = new DomHandler((error, dom)=>{
			if (error) {
				throw error
			} else {
				const maybe_node = find(dom as Element[], node=>node.name === 'icon')
				if (!maybe_node) {
					throw_not_found()
				}
				const node = maybe_node as Element
				node.name = 'svg'
				const { attribs } = node
				assign(attribs, {
					xmlns: 'http://www.w3.org/2000/svg',
					style: style as string,
				})
				delete attribs['{...$$props}']
				svg = getOuterHTML([node])
			}
		})
		const parser = new Parser(handler)
		const icon_path = await resolve(icon_name) as string
		parser.write((await fs.promises.readFile(icon_path)).toString())
		parser.end()
		res.end(svg)
	}
}
export type svg_get__resolve_T = (path:string)=>Promise<string>
export type get__T = (opts?:get_opts__T)=>get_T
export type _get_T = get__T
export type _get_type = get__T
export type get_T = (req:Request, res:Response)=>Promise<void>
export type get_type = get_T
export interface get_opts_type_fn_req__T {
	fn(req:Request, res:Response):Promise<void>
}
export type _get_opts_type_fn_req_T = get_opts_type_fn_req__T
export type _get_opts_type_fn_req_type = get_opts_type_fn_req__T
export interface get_opts__T {
	fn?:(req:Request, res:Response)=>Promise<any>
	resolve?:svg_get__resolve_T
}
export type _get_opts_T = get_opts__T
export type _get_opts_type = get_opts__T

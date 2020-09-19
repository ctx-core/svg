import fs from 'fs'
import { promisify } from 'util'
import { assign } from '@ctx-core/object'
import { find } from '@ctx-core/array'
import { DomHandler, Parser } from 'htmlparser2'
import { getOuterHTML } from 'domutils'
import { throw_not_found } from '@ctx-core/error'
import type { Element } from 'domhandler'
import type { Request, Response } from 'express'
import type { params_type, query_type } from '@ctx-core/sapper'
import resolve from 'resolve'
const resolve_promise = promisify(resolve)
export type _get_opts_type_fn_req_type = {
	fn(req:Request, res:Response):Promise<void>
}
export type _get_opts_type = {
	fn?:(req:Request, res:Response)=>Promise<any>
	resolve?:(path:string)=>string
}
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 */
export function _get(opts = {} as _get_opts_type) {
	const { fn } = opts
	const resolve = opts.resolve || resolve_promise
	if (typeof resolve !== 'function') throw 'opts.resolve must be a function'
	return async function get(req:Request, res:Response) {
		res.setHeader('Content-Type', 'image/svg+xml')
		const { icon_name } = req.params as params_type
		const { style } = req.query as query_type
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
		const icon_path = await resolve(icon_name)
		parser.write((await fs.promises.readFile(icon_path)).toString())
		parser.end()
		res.end(svg)
	}
}
export type _get_type = (opts?:_get_opts_type)=>get_type
export type get_type = (req:Request, res:Response)=>Promise<void>

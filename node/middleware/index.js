/// <reference types="node" />
/// <reference types="./index.d.ts" />
import { map } from 'ctx-core/array'
import { _has_key, clone, keys } from 'ctx-core/object'
import { readFile, stat } from 'node:fs/promises'
import { Parser } from 'htmlparser2'
import { join } from 'node:path'
/**
 * @param params{svg__get__params_T}
 * @returns {(req:Request, res:Response)=>Promise<void>}
 */
export function svg__get_(params) {
	const { dir } = params
	/**
	 * @param req{Request}
	 * @param res{Response}
	 * @returns {Promise<void>}
	 */
	return async function get(req, res) {
		const { params, query } = req
		const { name } = params
		let path
		const path_a = [
			join(dir, `${name}.svg`),
			join(dir, name)
		]
		for (let i = 0; i < path_a.length; i += 1) {
			const l_path = path_a[i]
			try {
				if (await stat(l_path)) {
					break
				}
			} catch (e) {
			}
		}
		if (!path) {
			res.writeHead(404)
			res.end('Not Found')
			return
		}
		const svg = '' + await readFile(path)
		if (!_has_key(query)) {
			res.writeHead(200, {
				'Content-Type': 'image/svg+xml'
			})
			res.end(svg)
			return
		}
		let opentag_svg = ''
		let opentag_svg_startIndex = 0
		let opentag_svg_endIndex = svg.length
		const parser = new Parser({
			onopentag(name, attribs) {
				if (name === 'svg') {
					opentag_svg_startIndex = parser.startIndex
					opentag_svg_endIndex = parser.endIndex
					const l_attribs = clone(attribs, query)
					if (l_attribs.viewbox) {
						l_attribs.viewBox = l_attribs.viewbox
						delete l_attribs.viewbox
					}
					const l_attribs_txt = map(keys(l_attribs), (key)=>`${key}=${JSON.stringify(l_attribs[key])}`).join(' ')
					opentag_svg = `<svg ${l_attribs_txt}>`
				}
			}
		}, {
			decodeEntities: true
		})
		parser.write(svg)
		parser.end()
		const out_svg = `${opentag_svg_startIndex ? svg.slice(0, opentag_svg_startIndex - 1) : ''}${opentag_svg}${svg.slice(opentag_svg_endIndex + 1)}`
		res.writeHead(200, {
			'Content-Type': 'image/svg+xml'
		})
		res.end(out_svg)
	}
}
export {
	svg__get_ as get_svg_,
	svg__get_ as _get_svg,
	svg__get_ as _get__svg,
}

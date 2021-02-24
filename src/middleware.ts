import fs from 'fs'
import { join } from 'path'
import { map } from '@ctx-core/array'
import { keys, clone, _has_key } from '@ctx-core/object'
import { promisify } from 'util'
import { Parser } from 'htmlparser2'
const exists = promisify(fs.exists)
const readFile = promisify(fs.readFile)
export function _get_svg({ dir }) {
	return async function get(req, res) {
		const { params, query } = req
		const { name } = params
		let path
		const path_a1 = [
			join(dir, `${name}.svg`),
			join(dir, name),
		]
		for (let i = 0; i < path_a1.length; i += 1) {
			const l_path = path_a1[i]
			if (await exists(l_path)) {
				path = l_path
				break
			}
		}
		if (!path) {
			res.writeHead(404)
			res.end('Not Found')
			return
		}
		const svg = '' + await readFile(path)
		if (!_has_key(query)) {
			res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
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
					opentag_svg_endIndex = parser.endIndex as number
					const l_attribs = clone(attribs, query)
					if (l_attribs.viewbox) {
						l_attribs.viewBox = l_attribs.viewbox
						delete l_attribs.viewbox
					}
					const l_attribs_txt =
						map(
							keys(l_attribs),
							key=>
								`${key}=${JSON.stringify(l_attribs[key])}`
						).join(' ')
					opentag_svg = `<svg ${l_attribs_txt}>`
				}
			},
		}, { decodeEntities: true })
		parser.write(svg)
		parser.end()
		const out_svg = `${
			opentag_svg_startIndex
			? svg.slice(0, opentag_svg_startIndex - 1)
			: ''
		}${opentag_svg}${svg.slice(opentag_svg_endIndex + 1)}`
		res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
		res.end(out_svg)
	}
}
export {
	_get_svg as _get__svg
}

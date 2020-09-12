import { extname } from 'path'
import { keys } from '@ctx-core/object'
import { map } from '@ctx-core/array'
import { Parser } from 'htmlparser2/lib/Parser'
import { DomHandler } from 'domhandler/lib'
import type { Element } from 'domhandler/lib/node'
import { getInnerHTML } from 'domutils'
import '@ctx-core/svelte/preprocess'
export type _markup_builder_opts_type = {
	_match?:({ filename: string })=>string
}
/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export function _markup(builder_opts:_markup_builder_opts_type = {}) {
	const {
		_match = ({ filename })=>extname(filename) === '.svg',
	} = builder_opts
	return async opts=>{
		if (!_match(opts)) return
		const { content } = opts
		let code
		const handler = new DomHandler((error, dom:Element[])=>{
			if (error) throw error
			const dom0 = dom[0]
			const { attribs } = dom0
			const txt__attribs =
				map(
					keys(attribs),
					key=>`${key}=${JSON.stringify(attribs[key])}`).join(' ')
			code = `
<script context="module">
export async function preload({ params, query }) {
	return Object.assign({}, query, params)
}
</script>
<script>
let svg_node
$: {
	Object.keys($$props).forEach(
		prop => svg_node && svg_node.setAttribute(prop, $$props[prop]))
}
</script>
<svelte:options namespace="svg"></svelte:options>
<svg bind:this={svg_node} ${txt__attribs}>${getInnerHTML(dom0)}</svg>
				`.trim()
		})
		const parser = new Parser(handler)
		parser.write(content.slice(content.indexOf('<svg')))
		parser.end()
		return {
			code,
			map: null,
		}
	}
}
export const markup = _markup()
export const markup__markdown = markup
export function _preprocess__svg(opts__builder = {}) {
	const markup = _markup(opts__builder)
	return {
		markup,
	}
}

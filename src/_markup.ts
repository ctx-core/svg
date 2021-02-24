import { extname } from 'path'
import { DomHandler } from 'domhandler'
import type { Element } from 'domhandler/lib/node'
import { getInnerHTML } from 'domutils'
import { Parser } from 'htmlparser2/lib/Parser'
import { map } from '@ctx-core/array'
import { keys } from '@ctx-core/object'
/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export function _markup(builder_opts:_markup_builder_opts_T = {}):markup_T {
	const {
		_match = ({ filename }:_match_opts_T)=>extname(filename) === '.svg',
	} = builder_opts
	return async (opts:_match_opts_T)=>{
		if (!_match(opts)) return
		const { content } = opts
		let code
		const handler = new DomHandler((error, dom)=>{
			if (error) throw error
			const dom0 = dom[0]
			const { attribs } = dom0 as Element
			const attribs_txt =
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
<svg bind:this={svg_node} ${attribs_txt}>${getInnerHTML(dom0)}</svg>
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
export interface _markup_builder_opts_T {
	_match?:(opts:_match_opts_T)=>string
}
export type _markup_builder_opts_type = _markup_builder_opts_T
export interface _match_opts_T {
	filename:string
	content:string
}
export type _match_opts_type = _match_opts_T
export interface _markup_fn_return_T {
	code:any
	map:null
}
export type _markup_fn_return_type = _markup_fn_return_T
export type markup_T = (opts:_match_opts_T)=>Promise<_markup_fn_return_T|undefined>
export type markup_type = markup_T

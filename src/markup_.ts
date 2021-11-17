import { DomHandler, hasChildren } from 'domhandler'
import type { Element, NodeWithChildren } from 'domhandler'
import getOuterHTML, { DomSerializerOptions } from 'dom-serializer'
import { Parser } from 'htmlparser2'
import { extname } from 'path'
import { map } from '@ctx-core/array'
import { keys } from '@ctx-core/object'
/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export function markup_(builder_opts:markup_builder_opts__T = {}):markup_T {
	const {
		match_ = ({ filename }:match_opts__T)=>extname(filename) === '.svg',
	} = builder_opts
	return async (opts:match_opts__T)=>{
		if (!match_(opts)) return
		const { content } = opts
		let code
		const handler = new DomHandler((error, dom_a)=>{
			if (error) throw error
			const dom0 = dom_a[0] as NodeWithChildren
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
function getInnerHTML(node:NodeWithChildren, options?:DomSerializerOptions) {
	return hasChildren(node)
				 ? node.children.map(function (node) { return getOuterHTML(node, options) }).join('')
				 : ''
}
export interface markup_builder_opts__T {
	match_?:(opts:match_opts__T)=>string
}
export type _markup_builder_opts_T = markup_builder_opts__T
export type _markup_builder_opts_type = markup_builder_opts__T
export interface match_opts__T {
	filename:string
	content:string
}
export type _match_opts_T = match_opts__T
export type _match_opts_type = match_opts__T
export interface markup_fn_return__T {
	code:any
	map:null
}
export type _markup_fn_return_T = markup_fn_return__T
export type _markup_fn_return_type = markup_fn_return__T
export type markup_T = (opts:match_opts__T)=>Promise<markup_fn_return__T|undefined>
export type markup_type = markup_T
export {
	markup_ as _markup,
}

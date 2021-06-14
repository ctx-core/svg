import { extname } from 'path';
import { DomHandler } from 'domhandler';
import { getInnerHTML } from 'domutils';
import { Parser } from 'htmlparser2/lib/Parser';
import { map } from '@ctx-core/array';
import { keys } from '@ctx-core/object';
/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export function markup_(builder_opts = {}) {
    const { match_ = ({ filename }) => extname(filename) === '.svg', } = builder_opts;
    return async (opts) => {
        if (!match_(opts))
            return;
        const { content } = opts;
        let code;
        const handler = new DomHandler((error, dom) => {
            if (error)
                throw error;
            const dom0 = dom[0];
            const { attribs } = dom0;
            const attribs_txt = map(keys(attribs), key => `${key}=${JSON.stringify(attribs[key])}`).join(' ');
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
				`.trim();
        });
        const parser = new Parser(handler);
        parser.write(content.slice(content.indexOf('<svg')));
        parser.end();
        return {
            code,
            map: null,
        };
    };
}
export { markup_ as _markup, };
//# sourceMappingURL=src/markup_.js.map
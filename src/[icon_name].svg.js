import fs from 'fs';
import { promisify } from 'util';
import { DomHandler, Parser } from 'htmlparser2';
import { getOuterHTML } from 'domutils';
import { assign } from '@ctx-core/object';
import { find } from '@ctx-core/array';
import { throw_not_found } from '@ctx-core/error';
import resolve from 'resolve';
const resolve_promise = promisify(resolve);
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 */
export function get_(opts = {}) {
    const { fn } = opts;
    const resolve = opts.resolve || resolve_promise;
    if (typeof resolve !== 'function')
        throw 'opts.resolve must be a function';
    return async function get(req, res) {
        res.setHeader('Content-Type', 'image/svg+xml');
        const { icon_name } = req.params;
        const { style } = req.query;
        if (fn)
            await fn(req, res);
        let svg = '';
        const handler = new DomHandler((error, dom) => {
            if (error) {
                throw error;
            }
            else {
                const maybe_node = find(dom, node => node.name === 'icon');
                if (!maybe_node) {
                    throw_not_found();
                }
                const node = maybe_node;
                node.name = 'svg';
                const { attribs } = node;
                assign(attribs, {
                    xmlns: 'http://www.w3.org/2000/svg',
                    style: style,
                });
                delete attribs['{...$$props}'];
                svg = getOuterHTML([node]);
            }
        });
        const parser = new Parser(handler);
        const icon_path = await resolve(icon_name);
        parser.write((await fs.promises.readFile(icon_path)).toString());
        parser.end();
        res.end(svg);
    };
}
//# sourceMappingURL=src/%5Bicon_name%5D.svg.js.map
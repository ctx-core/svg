"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._get = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const object_1 = require("@ctx-core/object");
const array_1 = require("@ctx-core/array");
const htmlparser2_1 = require("htmlparser2");
const domutils_1 = require("domutils");
const readFile = util_1.promisify(fs_1.default.readFile);
const resolve_1 = __importDefault(require("resolve"));
const resolve_promise = util_1.promisify(resolve_1.default);
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 * @param opts
 * @param {function(string)} opts.resolve - Function to resolve path from string
 * @returns {function(Request,Response)} {get}
 */
function _get(opts = {}) {
    const { fn } = opts;
    const resolve = opts.resolve || resolve_promise;
    if (typeof resolve !== 'function')
        throw 'opts.resolve must be a function';
    return async function get(req, res) {
        res.setHeader('Content-Type', 'image/svg+xml');
        const { name__icon } = req.params;
        const { style } = req.query;
        if (fn)
            await fn(req, res);
        let svg = '';
        const handler = new htmlparser2_1.DomHandler((error, dom) => {
            if (error) {
                throw error;
            }
            else {
                const node = array_1.find(dom, node => node.name === 'icon');
                node.name = 'svg';
                const { attribs } = node;
                object_1.assign(attribs, {
                    xmlns: 'http://www.w3.org/2000/svg',
                    style,
                });
                delete attribs['{...$$props}'];
                svg = domutils_1.getOuterHTML([node]);
            }
        });
        const parser = new htmlparser2_1.Parser(handler);
        const path__icon = await resolve(name__icon);
        parser.write((await readFile(path__icon)).toString());
        parser.end();
        res.end(svg);
    };
}
exports._get = _get;

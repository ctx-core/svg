import { be_ } from '@ctx-core/object';
import { derived } from '@ctx-core/store';
import { svg_margin$_b } from './svg_margin$_b';
import { svg_width$_b } from './svg_width$_b';
import { svg_height$_b } from './svg_height$_b';
import { svg_content_width$_b } from './svg_content_width$_b';
import { svg_content_height$_b } from './svg_content_height$_b';
const key = 'svg_matrix2d_ctx$';
export const svg_matrix2d_ctx$_b = be_(key, ctx => derived([
    svg_margin$_b(ctx),
    svg_width$_b(ctx),
    svg_height$_b(ctx),
    svg_content_width$_b(ctx),
    svg_content_height$_b(ctx),
], ([svg_margin, svg_width, svg_height, svg_content_width, svg_content_height]) => ({
    svg_margin,
    svg_width,
    svg_height,
    svg_content_width,
    svg_content_height,
})));
export { svg_matrix2d_ctx$_b as b__ctx__matrix2d__svg, };
//# sourceMappingURL=src/svg_matrix2d_ctx$_b.js.map
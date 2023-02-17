import { svg_content_height__ } from './svg_content_height__.js';
import { svg_content_width__ } from './svg_content_width__.js';
import { svg_height__ } from './svg_height__.js';
import { svg_margin__ } from './svg_margin__.js';
import { svg_width__ } from './svg_width__.js';
export async function svg_matrix2d__set(ctx, opts = {}) {
    const svg_margin = opts.svg_margin || svg_margin__(ctx).$ || {
        top: 20,
        right: 20,
        bottom: 60,
        left: 100
    };
    const svg_width = opts.svg_width || svg_width__(ctx).$ || NaN;
    const svg_height = opts.svg_height || svg_height__(ctx).$ || NaN;
    const { left , right , top , bottom  } = svg_margin;
    const svg_content_height = svg_height - top - bottom;
    const svg_content_width = svg_width - left - right;
    svg_margin__(ctx).$ = svg_margin;
    svg_height__(ctx).$ = svg_height;
    svg_width__(ctx).$ = svg_width;
    svg_content_height__(ctx).$ = svg_content_height;
    svg_content_width__(ctx).$ = svg_content_width;
}

//# sourceMappingURL=svg_matrix2d__set.js.map

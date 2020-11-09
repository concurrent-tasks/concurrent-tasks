/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import * as path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import builtins from 'builtin-modules';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const input = 'src/index.ts';
const pkg = require(path.resolve('package.json'));

const isProd = process.env.NODE_END === 'production';

const plugins = [
    resolve(),
    commonjs(),
    json(),
    typescript({
        typescript: require('typescript'),
        clean: true,
        useTsconfigDeclarationDir: true,
    }),
];

export default {
    input,
    output: [
        output('cjs', 'main'),
        output('es', 'module'),
        output('umd', 'umd'),
    ],
    plugins,
    external: [...builtins],
};

function output(format, pkgKey) {
    return {
        file: pkg[pkgKey],
        name: 'ConcurrentTasks',
        format,
        sourcemap: !isProd,
        exports: 'auto',
        plugins: [
            isProd &&
                terser({
                    mangle: false,
                    compress: isProd,
                    format: {
                        beautify: !isProd,
                    },
                }),
        ],
    };
}

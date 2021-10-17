import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

const config = defineConfig({
  input: 'src/main.ts',
  output: {
    file: 'dist/next-useragent.js',
    format: 'cjs'
  },
  external: [
    'next',
    'react',
    'react-dom',
    'ua-parser-js'
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript()
  ]
});

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;


import { join } from 'path'

import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

module.exports = {
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
  jsnext: true,
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      declarationDir: join(__dirname, 'dist')
    })
  ]
}

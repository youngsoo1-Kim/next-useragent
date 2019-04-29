/* eslint-disable */

import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { dts } from 'rollup-plugin-dts'

module.exports = [
  {
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
      typescript()
    ]
  },
  {
    input: 'src/main.ts',
    output: {
      file: 'dist/next-useragent.d.ts',
      format: 'es'
    },
    external: [
      'next',
      'react',
      'react-dom',
      'ua-parser-js'
    ],
    plugins: [
      dts()
    ]
  }
]

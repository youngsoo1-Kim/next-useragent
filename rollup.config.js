/* eslint-disable */

import uglify from '@lopatnov/rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

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
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      process.env.NODE_ENV === 'production' ? uglify() : null
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

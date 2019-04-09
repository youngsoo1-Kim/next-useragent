
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'

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
    'useragent'
  ],
  plugins: [
    commonjs(),
    typescript()
  ]
}
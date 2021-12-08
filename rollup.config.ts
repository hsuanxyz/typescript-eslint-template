import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import camelCase from 'lodash.camelcase'
import typescript from '@rollup/plugin-typescript'

const pkg = require('./package.json')

export default {
  input: `src/index.ts`,
  output: [
    {file: pkg.main, sourcemap: true, name: camelCase(pkg.name), format: 'umd'}
  ],
  plugins: [peerDepsExternal(), typescript()]
}

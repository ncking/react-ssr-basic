const { babel } = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');

const globals =  require('rollup-plugin-node-globals');
const builtins =  require('rollup-plugin-node-builtins');


const babelOptions = {
  "presets": [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}

module.exports = [
  {
    input: './src/main.js',
    output: {
      file: 'server/dist/ssr.js',
      format: 'module',
    }, 
    plugins: [
      nodeResolve(),
      commonjs(),
      babel(babelOptions),
      globals(),
      builtins(),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      })
    ],
  },
]
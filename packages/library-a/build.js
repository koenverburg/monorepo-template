#!/usr/bin/env node
const ts = require('typescript')
const { build } = require('esbuild')
const tsconfig = require('./tsconfig.json')
// const { build, tsconfig, dirname, log } = require('estrella')

function generateTypeDefs(entryFiles, outDir) {
  const filenames = Array.from(
    new Set(
      (Array.isArray(entryFiles) ? entryFiles : [entryFiles])
        )).filter(v => v)

  console.info('Generating type declaration files for', filenames.join(', '))

  const program = ts.createProgram(filenames, {
    ...tsconfig.compilerOptions,
    moduleResolution: undefined,
    declaration: true,
    outDir: outDir,
  })

  // Params: targetSourceFile, writeFile, cancellationToken, emitOnlyDtsFiles
  program.emit(undefined, undefined, undefined, true)
}

const setup = {
  outDir: 'dist',
  outfile: 'dist/index.js',
  entryPoints: ['./src/index.ts'],
}

build({
  entryPoints: setup.entryPoints,
  outfile: setup.outfile,
  bundle: true,
  minify: false,
  sourcemap: false,
  target: 'es2020',
  platform: 'neutral',
}).then(() => {
  generateTypeDefs(setup.entryPoints, setup.outDir)
}).catch(err => {
  console.log(err)
  process.exit(1)
})

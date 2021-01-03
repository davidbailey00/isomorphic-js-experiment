require('esbuild').buildSync({
  entryPoints: ['src/client.tsx'],
  bundle: true,
  outdir: 'dist',
  splitting: true,
  minify: true,
  format: 'esm',
  sourcemap: true,
});

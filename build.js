require('esbuild')
  .build({
    entryPoints: ['src/client.tsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    define: { 'process.env.NODE_ENV': '"PRODUCTION"' },
  })
  .catch(() => process.exit(1));

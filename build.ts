import { build } from 'esbuild';

build({
  entryPoints: ['src/client.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  define: { 'process.env.NODE_ENV': '"PRODUCTION"' },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

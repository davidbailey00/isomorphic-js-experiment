import { build } from 'esbuild';

build({
  entryPoints: ['src/client.tsx'],
  bundle: true,
  outdir: 'dist',
  splitting: true,
  minify: true,
  format: 'esm',
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

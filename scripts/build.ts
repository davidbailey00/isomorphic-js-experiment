import { build } from 'esbuild';

build({
  entryPoints: ['src/client.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  minify: true,
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

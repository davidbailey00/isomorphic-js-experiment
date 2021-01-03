import { renderSync } from 'sass';
import { writeFileSync } from 'fs';

const result = renderSync({
  file: 'src/styles.scss',
});

writeFileSync('dist/styles.css', result.css);

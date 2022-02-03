import { titleCase } from './helpers.js';
import { name, version, description, license } from './package.json';

const formats = [ 'iife', 'es', 'cjs' ];

const banner =
  `/*! ${titleCase(name)} ${version} | ${description} | ` +
  `Copyright ${new Date().getFullYear()} | ${license} license */`;

export default formats.map(format => ({
  input: 'index.js',
  output: {
    banner,
    format,
    preferConst: true,
    exports: 'default',
    name: titleCase(name),
    file: name + (format === 'iife' ? '' : `.${format}`) + '.js'
  }
}));

import { name, version, description, license } from './package.json';

const banner =
  `/*! ${name} ${version} | ${description} | ` +
  `Copyright ${new Date().getFullYear()} | ${license} license */`;

export default {
  input: 'index.js',
  output: {
    banner,
    file: 'time.js',
    format: 'iife',
    name: 'Time',
    preferConst: true
  }
};

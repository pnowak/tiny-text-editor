import nodeResolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';

export default {
	entry: 'src/editor.js',
	format: 'umd',
	moduleName: 'editor',
	plugins: [ nodeResolve(), convertCJS() ],
	dest: 'dist/bundle.js'
}
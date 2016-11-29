/* global chai */

'use strict';

import Editor from '../src/editor';

const expect = chai.expect;

describe( 'Editor', () => {
	it( 'has method create', () => {
		expect( Editor.prototype.create ).to.be.a( 'function' );
	} );

	it( 'adds, gets and removes listeners correctly', () => {
		const storage = new ListenersStorage();
		const element = {};
		const fn = () => {};
		const listener = () => {
			fn();
		};

		storage.add( element, 'click', 'selektor', fn, listener );

		expect( storage.get( element, 'click', 'selektor', fn ) ).to.equal( listener );

		storage.remove( element, 'click', 'selektor', fn );

		expect( storage.get( element, 'click', 'selektor', fn ) ).to.equal( null );
	} );
} );
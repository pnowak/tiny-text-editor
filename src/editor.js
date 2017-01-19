'use strict';

import Typing from './typing';
import Button from './button';
import { get } from './helpers';

const typing = new Typing();

class Editor {
	constructor(element, ...config) {
		this.element = element;
		this.config = config;
	}

	create() {
		const root = document.createElement('div');
		const content = document.createTextNode(this.element.innerText);

		this.config.forEach( function (item, index) {
			let button = new Button(item);

			button.create();
		});

		get( 'editor' ).addEventListener('keydown', (e) => typing.handleKeypress(e), false);

		root.setAttribute('contentEditable', true);
		root.classList.add('root');
		root.appendChild(content);

		return this.element.replaceChild(root, this.element.childNodes[1]);
	}
}

export default Editor;
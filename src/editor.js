'use strict';

import Typing from './typing';
import Button from './button';
import { get } from './helpers';

const typing = new Typing();
const bold = new Button('bold');
const italic = new Button('italic');

bold.create();
italic.create();

class Editor {
	constructor(element, config) {
		this.element = element;
		this.config = config;
	}

	create(element, config) {
		const root = document.createElement('div');
		const content = document.createTextNode(element.innerText);

		get( 'editor' ).addEventListener('keydown', (e) => typing.handleKeypress(e), false);

		root.setAttribute('contentEditable', true);
		root.classList.add('root');
		root.appendChild(content);

		return element.replaceChild(root, element.childNodes[1]);
	}
}

export default Editor;
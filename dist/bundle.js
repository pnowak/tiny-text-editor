(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.editor = factory());
}(this, (function () { 'use strict';

class Editor {
	constructor(element, config = {}) {
		this.element = element;
		this.config = config;
	}

	create(element, config) {
		const root = document.createElement('div');
		const content = document.createTextNode(element.innerText);

		root.setAttribute('contentEditable', true);
		root.classList.add('root');
		root.appendChild(content);

		element.replaceChild(root, element.childNodes[1]);
	}
}

return Editor;

})));

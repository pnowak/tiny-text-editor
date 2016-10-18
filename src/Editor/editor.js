class Editor {
	constructor(element, config = {}) {
		this.element = element;
		this.config = config;
	}

	create(element, config) {
		const root = document.createElement('div');
		const content = document.createTextNode(element.innerText);

		root.setAttribute('contentEditable', true);
		root.className = 'root';
		root.appendChild(content);

		element.replaceChild(root, element.childNodes[1]);
	}
}
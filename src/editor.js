class Editor {
	constructor(element, config) {}

	create(element, config) {
		let root = document.createElement('div');
		let content = document.createTextNode(element.outerText);

		root.setAttribute('contentEditable', true);
		root.className = 'root';
		root.appendChild(content);

		element.replaceChild(root, element.childNodes[1]);
	}
}
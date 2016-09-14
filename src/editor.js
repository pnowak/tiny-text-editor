class Editor {
	constructor() {}

	create(element, options = {}) {
		let area = document.createElement('textarea');
		let content = document.createTextNode(element.outerText);
		area.appendChild(content);

		element.replaceChild(area, element.childNodes[1]);
	}
}
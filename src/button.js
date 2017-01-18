'use strict';

import { get } from './helpers';

class Button {
	constructor(type) {
		this.type = type;
	}

	create() {
		const button = document.createElement( 'button' );
		const content = document.createTextNode(this.type);
		const div = get( 'buttons' );

		button.addEventListener('click', (e) => console.log(e.target), false);

		button.classList.add(this.type);
		button.appendChild(content);

		return div.appendChild(button);
	}
}

export default Button;
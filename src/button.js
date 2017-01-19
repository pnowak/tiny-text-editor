'use strict';

import { get } from './helpers';

class Button {
	constructor(type) {
		this.type = type;
	}

	create() {
		const button = document.createElement( 'button' );
		const firstLetter = document.createTextNode(this.type[0]);
		const div = get( 'buttons' );

		button.addEventListener('click', (e) => console.log(e.target), false);

		button.classList.add(this.type);
		button.appendChild(firstLetter);

		return div.appendChild(button);
	}
}

export default Button;
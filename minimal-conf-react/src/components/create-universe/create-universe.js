import React from 'react';
import './create-universe.scss';

class CreateUniverse {
	// we need @babel/plugin-proposal-class-properties for this to work
	buttonClass = 'create-universe__button';

	render() {
		const button = document.createElement('button');
		button.innerText = 'Create Universe';
		button.classList = this.buttonClass;
		button.onclick = () => {
			// to demonstrate code splitting
			alert('BIG BANG!');
		}
		document.querySelector('body').appendChild(button);
	}
}

export default CreateUniverse;
import _ from 'lodash';
import './create-star.scss';

class CrateStar {
	// we need @babel/plugin-proposal-class-properties for this to work
	buttonClass = 'create-star__button';

	render() {
		const button = document.createElement('button');
		button.innerText = 'Create Star';
		button.classList = this.buttonClass;
		button.onclick = () => {
			// to demonstrate code splitting
			alert(_.upperCase('KATABOOM!'));
		}
		document.querySelector('body').appendChild(button);
	}
}

export default CrateStar;
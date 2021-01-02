import './create-universe.css';

class CreateUniverse {
	render() {
		const button = document.createElement('button');
		button.innerText = 'Create Universe';
		button.classList = 'create-universe__button';
		button.onclick = () => {
			alert('BIG BANG!');
		}
		document.querySelector('body').appendChild(button);
	}
}

export default CreateUniverse;
import style from './galaxy.scss';

export default class Galaxy {
	render() {
		import('Star/Star')
			.then(StarModule => {
				const containerId = 'galaxy';
				const container = document.querySelector(`#${containerId}`);
				const Star = StarModule.default;
				const star = new Star();

				if (!container) {
					const pageBody = document.querySelector('body');
					const galaxyContainer = document.createElement('section');
					galaxyContainer.id = containerId;
					pageBody.appendChild(galaxyContainer);
				}

				for (let i=0; i<222; i++) {
					star.render(`#${containerId}`);
				}
			});
	}
}

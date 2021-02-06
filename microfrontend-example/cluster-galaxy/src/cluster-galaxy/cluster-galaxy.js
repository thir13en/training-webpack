import Star from '../star/star.js'
import style from './cluster-galaxy.scss';

export default class CluseterGalaxy {
	render() {
		const containerId = 'cluster-galaxy';
		const container = document.querySelector(`#${containerId}`);
		const star = new Star();

		if (!container) {
			const pageBody = document.querySelector('body');
			const clusterGalaxyContainer = document.createElement('section');
			clusterGalaxyContainer.id = containerId;
			pageBody.appendChild(clusterGalaxyContainer);
		}

		for (let i=0; i<222; i++) {
			star.render(`#${containerId}`);
		}
	}
}
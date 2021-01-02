import connect from './connect.js';
import CreateUniverse from './components/create-universe/create-universe.js';

connect();
const createUniverse = new CreateUniverse();
createUniverse.render();
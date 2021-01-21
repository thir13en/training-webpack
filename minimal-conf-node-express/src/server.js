const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello bro!');
});

app.listen(3000, () => console.log('App connected!'));
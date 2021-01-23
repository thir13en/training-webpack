const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// With this, we need to append the /static path to all our static HTML imports
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

// SPA
app.get('/', (req, res) => {
	const htmlFilePath = path.resolve(__dirname, '../dist/universe.html');
	const contentFromHTMLFile = fs.readFileSync(htmlFilePath, 'utf-8');

	res.send(contentFromHTMLFile);
});

// MPA
app.get('/universe/', (req, res) => {
	const htmlFilePath = path.resolve(__dirname, '../dist/universe.html');
	const contentFromHTMLFile = fs.readFileSync(htmlFilePath, 'utf-8');

	res.send(contentFromHTMLFile);
});
app.get('/star/', (req, res) => {
	const htmlFilePath = path.resolve(__dirname, '../dist/star.html');
	const contentFromHTMLFile = fs.readFileSync(htmlFilePath, 'utf-8');

	res.send(contentFromHTMLFile);
});

app.listen(3000, () => console.log('App connected!'));
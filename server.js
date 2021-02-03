const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '.', 'public');

// app.use(express.static(__dirname, ''));
app.use(express.static(path.join(__dirname, './build')))

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './build'), 'index.html')

});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App running`) 
});
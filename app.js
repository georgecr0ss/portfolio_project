var express = require('express'),
	app = express();

const PORT = 5000;

app.get('/', function(req, res){
	res.send('Hello World')
});

app.get('/books', function(req, res) {
	res.send('Hello Books');
})
app.listen(PORT, function (err) {
	console.log('running on port %s', PORT);
});
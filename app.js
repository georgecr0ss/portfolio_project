var express = require('express');

var app = express();
var booksRouter = require('./src/routes/bookRoutes');

var PORT = process.env.PORT || 5000;
// app.use(app.router);
//app.use allows us to set middleware,

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', booksRouter);
app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(PORT, function(err) {
    console.log('running on port %s', PORT);
});
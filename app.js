var express = require('express');

var app = express();

var PORT = process.env.PORT || 5000;
var nav =  [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Authors',
    Text: 'Author'
}];
var booksRouter = require('./src/routes/bookRoutes')(nav); 

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
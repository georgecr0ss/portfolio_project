var express = require('express');

var app = express();
var booksRouter =  express.Router();

var PORT = process.env.PORT || 5000;
// app.use(app.router);
//app.use allows us to set middleware,


app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

booksRouter.route('/')
	.get(function (req, res) {
		res.send('Hello Books')
	});
booksRouter.route('/single')
	.get(function(req, res){
		res.send('Hello Book')
	})
app.use('/Books', booksRouter);

// app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Portfolio',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(PORT, function(err) {
    console.log('running on port %s', PORT);
});
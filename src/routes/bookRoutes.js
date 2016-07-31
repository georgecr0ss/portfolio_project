var express = require('express');
var booksRouter = express.Router();

var books = [{
    title: 'Tom Sawyer',
    author: 'Mark Twain',
    read: false
},{
    title: 'The Prince and the Pauper',
    author: 'Mark Twain',
    read: false
},{
    title: 'До Чикаго и назад',
    author: 'Алеко Константинов',
    read: false
},{
    title: 'Бай Ганьо',
    author: 'Алеко Константинов',
    read: false
},{
    title: 'Под игото',
    author: 'Иван Вазов',
    read: false
},{
    title: 'Мамино детенце',
    author: 'Любен Каравелов',
    read: false
}];

booksRouter.route('/')
	.get(function (req, res) {
    res.render('bookListView', {
        title: 'Portfolio',
        nav: [{
            Link: '/Books',
            Text: 'Authors'
        }, {
            Link: '/Mark Twain',
            Text: 'Mark Twain'
        }],
        books: books
    });
});
booksRouter.route('/:id')
	.get(function(req, res) {
    var id =  req.params.id;
    res.render('bookView', {
        title: 'Portfolio',
        nav: [{
            Link: '/Books',
            Text: 'Authors'
        }, {
            Link: '/Mark Twain',
            Text: 'Mark Twain'
        }],
        books: books[id]
    });
});

// app.use(express.static('src/views'));

booksRouter.get('/', function(req, res) {
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

module.exports = booksRouter;
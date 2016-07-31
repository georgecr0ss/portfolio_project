var express = require('express');
var booksRouter = express.Router();
var router = function(nav) {

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
            nav: nav,
            books: books
        });
    });
    booksRouter.route('/:id')
        .get(function(req, res) {
        var id =  req.params.id;
        res.render('bookView', {
            title: 'Portfolio',
            nav: nav,
            books: books[id]
        });
    });

    // app.use(express.static('src/views'));

    booksRouter.get('/', function(req, res) {
        res.render('index', {
            title: 'Portfolio',
            nav: nav
        });
    });

    return booksRouter;
}

module.exports = router;
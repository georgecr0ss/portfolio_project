var express = require('express');
var booksRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var router = function(nav) {
    var bookService = require('../services/goodreadsService')();

    var bookController = require('../controllers/bookController')(bookService, nav);

    booksRouter.use(bookController.middleware);

    booksRouter.route('/')
        .get(bookController.getIndex);

    booksRouter.route('/asJson')
        .get(bookController.asJson);

    booksRouter.route('/:id')
        .get(bookController.getById);

    // app.use(express.static('src/views'));

    booksRouter.get('/', function(req, res) {
        res.render('index', {
            title: 'Portfolio',
            nav: nav
        });
    });

    return booksRouter;
};

module.exports = router;
var express = require('express');
var booksRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var router = function(nav) {
 
    booksRouter.route('/')
        .get(function (req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function(err, db){
            var collection = db.collection('books');
            collection.find({}).toArray(
                function(err, results){                    
                    res.render('bookListView', {
                        title: 'Portfolio',
                        nav: nav,
                        books: results
                    });
                }
            );

        db.close();
        });
    });

    booksRouter.route('/:id')
        .get(function (req, res) {
            console.log(req.params.id);
            var id =   new ObjectId(req.params.id);
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db){

                var collection = db.collection('books');

                collection.findOne({_id: id},
                    function(err, results) {                    
                        res.render('bookView', {
                            title: 'Portfolio',
                            nav: nav,
                            book: results
                        });
                    }
                );

            db.close();
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
};

module.exports = router;
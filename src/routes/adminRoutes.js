var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            'bookId': '2956',
            'title': 'Huckleberry Finn',
            'author': 'Mark Twain',
            'genre': 'Historical',
            'read': false
        },
        {
            'bookId': '157993',
            'title': 'Little Prince',
            'author': 'Antoan De Sent Egziperi',
            'genre': 'Historical',
            'read': false
        },  
        {
            'bookId': '24583',
            'title': 'Tom Sawyer',
            'author': 'Mark Twain',
            'genre': 'Historical',
            'read': false
        },
        { 
            'title': 'Bro Ganyo',
            'author': 'Aleko Konstantionov',
            'genre': 'Historical',
            'read': false
        }, 
];

var router = function (nav) {

    adminRouter.route('/addBooks')
    .post(function(req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        var book  = req;
        console.log(book);
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.insertMany(book, function(err, results) {
                // res.send(results);
                res.json({info: 'cat was successfully added'});

            }
            );
            db.close();
        });
        // res.send('inserting books');
    })
    .get(function(req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.insertMany(books, function(err, results) {
                res.send(results);

            }
            );
            db.close();
        });
        // res.send('inserting books');
    });
    return adminRouter;
};

module.exports = router;
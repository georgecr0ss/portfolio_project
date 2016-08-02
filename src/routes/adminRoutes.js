var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

    var books = [{
        title: 'Huckleberry Finn',
        author: 'Mark Twain',
        genre: 'Historical',
        read: false
        },{
        title: 'Little Prince',
        author: 'Antoan De Sent Egziperi',
        genre: 'Historical',
        read: false
        }
    ];


var router = function (nav) {

    adminRouter.route('/addBooks')
    .get(function(req, res) {
    	var url = 'mongodb://localhost:27017/libraryApp';
    	mongodb.connect(url, function(err, db){
    		var collection = db.collection('books');
    		collection.insertMany(books, function(err, results){ 
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
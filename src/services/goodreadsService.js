var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = function () {

    var getBookId = function (id, cd) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=tnvxgbZRHUXcnuvqQmJkA'
        };

        var callback = function (respones) {
            var str = '';

            respones.on('data', function(chunk) {
                str += chunk;
            });
            respones.on('end', function () {
                // console.log(str);
                parser.parseString(str, function (err, result) {

                    cd(null, result.GoodreadsResponse.book);
                });
            });
        };

        http.request(options, callback).end();
    };

    return {
        getBookId: getBookId
    };
};

module.exports = goodreadsService;
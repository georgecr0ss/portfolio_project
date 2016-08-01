var express = require('express');

var app = express();

var mnogoUrl  ='mongodb://gogo:66@ds029655.mlab.com:29655/books';
var PORT = process.env.PORT || 5000;
var nav =  [{
    Link: '/Books',
    Text: 'Books'
}, {
    Link: '/Authors',
    Text: 'Authors'
},{
    Link: '/Admin/addBooks',
    Text: 'Admin'
}];
var booksRouter = require('./src/routes/bookRoutes')(nav); 
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/Books', booksRouter);
app.use('/Admin', adminRouter);
app.get('/', function(req, res) {
    res.render('index',{nav: nav});
});

app.listen(PORT, function(err) {
    console.log('running on port %s', PORT);
});
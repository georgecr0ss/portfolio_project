var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport  = require('passport');
var xml2js = require('xml2js');

var app = express();

var mnogoUrl  = 'mongodb://localhost:27017/libraryApp';
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
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'library'}));

//passport middleware
require('./src/config/passport')(app);

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', booksRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', function(req, res) {
    res.render('index',{nav: nav});
});

app.listen(PORT, function(err) {
    console.log('running on port %s', PORT);
});
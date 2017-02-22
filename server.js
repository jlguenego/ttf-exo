var express = require('express');
var serveIndex = require('serve-index');

var app = express();

var port = 8000;


// for the short loop dev paradigm: express watches the files and build the bundles when needed.

// webpack
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.output.path = '/';
var compiler = webpack(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');
app.use('/app/wpk/', webpackDevMiddleware(compiler, {
    // options
}));

var webservice = require('./webservices.js');
app.use('/ws/', webservice);

app.use(express.static('.'));
app.use(serveIndex('.', {icons: true}));

app.all('/app/*', function(req, res, next) {
	res.sendFile('./app/index.html', {root: __dirname});
});

app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});
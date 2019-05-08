var express		= require('express'),
	bodyParser	= require('body-parser'),
	app			= express();

var indexRoutes	= require('./routes/index'),
	apiRoutes	= require('./routes/api');

app.set('port', (process.env.PORT || 3000));
app.set('view engin', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*****Routes*****/
app.use('/', indexRoutes);
app.use('/api', apiRoutes);

app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')));

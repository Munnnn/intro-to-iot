var express		= require('express'),
	bodyParser	= require('body-parser'),
	app			= express();

var dataHelpers		=require('./helpers/data'),

var indexRoutes	= require('./routes/index'),
	apiRoutes	= require('./routes/api');

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json(), { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));

/*****Routes*****/
app.use('/', indexRoutes);
// app.use('/api', apiRoutes);




app.get('/api/data', (req,res) => {
	res.send("hello world!");
});


// app.route('/api/data')
// 	.get(dataHelpers.getData)
// 	.post(dataHelpers.createData)
// 	.delete(dataHelpers.deleteData);

// app.route('/api/data/:id')
// 	.get(dataHelpers.getOneData)
// 	.put(dataHelpers.editData)
// 	.delete(dataHelpers.deleteOneData);

app.route('/api/setting')
	.get(settingsHelpers.getSettings)
	.put(settingsHelpers.editSettings)

app.route('/api/statistics')
	.get(statsHelpers.getStats)
	.put(statsHelpers.editStats)
	.delete(statsHelpers.resetStats)

app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')));

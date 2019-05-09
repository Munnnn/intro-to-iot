var express			=require('express'),
	router			=express.Router(),
	db				=require('../models'),
	dataHelpers		=require('../helpers/data'),
	statsHelpers	=require('../helpers/stats'),
	settingsHelpers	=require('../helpers/settings');

/*****
* C -- Creat
* R -- READ
* U -- UPDATE
* D -- DDELETE
*****/


router.route('/data')
	.get(console.log("hello"))
	.post(dataHelpers.createData)
	.delete(dataHelpers.deleteData);

router.route('/data/:id')
	.get(dataHelpers.getOneData)
	.put(dataHelpers.editData)
	.delete(dataHelpers.deleteOneData);

router.route('/setting')
	.get(settingsHelpers.getSettings)
	.put(settingsHelpers.editSettings)

router.route('/statistics')
	.get(statsHelpers.getStats)
	.put(statsHelpers.editStats)
	.delete(statsHelpers.resetStats)

module.exports = router;

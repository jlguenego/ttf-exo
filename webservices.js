var express = require('express');
// eslint-disable-next-line new-cap
var router = express.Router();
module.exports = router;

router.use(function(req, res, next) {
	console.log('router req.url', req.url);
	next();
});


router.get('/s1', function(req, res) {
	setTimeout(function() {
		res.json({result: 's1', titi: 'dqsdqsdqsd'});
	}, 2000);
});
router.get('/s2', function(req, res) {
	setTimeout(function() {
		res.json({result: 's2', titi: 'dqsdqsdqsd'});
	}, 1000);
});
router.get('/s3', function(req, res) {
	setTimeout(function() {
		res.json({result: 's3', titi: 'dqsdqsdqsd'});
	}, 2000);
});
router.get('/s4', function(req, res) {
	setTimeout(function() {
		res.json({result: 's4', titi: 'dqsdqsdqsd'});
	}, 3000);
});
router.get('/s5', function(req, res) {
	setTimeout(function() {
		res.json({result: 's5', titi: 'dqsdqsdqsd'});
	}, 2000);
});

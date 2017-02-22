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
		res.json({result: 's1dddd', titi: 'dqsdqsdqsd'});
	}, 2000);
});

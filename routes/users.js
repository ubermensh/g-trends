var express = require('express');
var router = express.Router();
const googleTrends = require('google-trends-api');

/* GET users listing. */
router.get('/', function(req, res, next) {
	googleTrends.interestOverTime({keyword: 'Women\'s march'}, function(err, results){
	  if(err) console.error('there was an error!', err);
	  else {
			res.json(results);
		}
	})
  //res.send('respond with a resource');
  //res.json([{
    //id: 1,
    //username: "samsepi0l"
  //}, {
    //id: 2,
    //username: "D0loresH4ze"
  //}]);

});

module.exports = router;

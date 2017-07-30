var express = require('express');
var router = express.Router();
const googleTrends = require('google-trends-api');

function reformatTrendsData(trendsData) {
    console.log(trendsData);
    return {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
        }]
    }

   //return trendsData.map(item => {
     //for (var key in item) {
       //var obj = {};
       //obj['date'] = key;
       //obj['volume'] = item[key];
       //return obj;
     //}
   //});
}

router.get('/', function(req, res, next) {
	googleTrends.interestOverTime({keyword: 'Women\'s march', startTime: new Date('2016-01-01')},
    function(err, results){
	  if(err) console.error('there was an error!', err);
	  else {
            var reformatedResults = reformatTrendsData(results[0]);
			res.json(reformatedResults);
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

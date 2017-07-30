var express = require('express');
var router = express.Router();
const debug = require('debug')('chart');
const googleTrends = require('google-trends-api');

function reformatTrendsData(trendsData) {
    trendsData = JSON.parse(trendsData);
    const res = trendsData['default']['timelineData'];
    const labels = [];
    const data = [];

    for (let key in res) {
      let item = res[key];
      labels.push(item.formattedTime);
      data.push(parseInt(item.formattedValue));
    }
    return {
        labels: labels,
        datasets: [{data:data}]
    }

    //return {
        //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //datasets: [{
            //data: [12, 19, 3, 5, 2, 3],
        //}]
    //}
}

router.get('/', function(req, res, next) {
	googleTrends.interestOverTime({keyword: 'Women\'s march', startTime: new Date('2016-01-01')},
    function(err, results){
	  if(err) console.error('there was an error!', err);
	  else {
            var reformatedResults = reformatTrendsData(results);
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

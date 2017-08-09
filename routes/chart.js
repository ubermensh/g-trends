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
        labels.push(item.formattedAxisTime);
        data.push(parseInt(item.formattedValue));
    }
    return {
        labels: labels,
        data: data
    }
}

router.get('/:query/:dateFrom/:dateTo', function (req, res, next) {
    const {query, dateFrom, dateTo} = req.params;
    debug(query);
    googleTrends.interestOverTime({keyword: query, startTime: new Date(dateFrom), endTime: new Date(dateTo)},
        function (err, results) {
            if (err) console.error('there was an error!', err);
            else {
                var reformatedResults = reformatTrendsData(results);
                res.json(reformatedResults);
            }
        })


});

module.exports = router;

// node runs file with strict interpretation
'use strict';

var Twit    = require('twit');
var express = require('express');
var router  = express.Router();

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

// Search for tweets since June 1
router.post('/twit', function(req, res) {
  
  var search = req.body.search;

  T.get('search/tweets', { q: search + ' since:2016-06-01', count: 2 }, function(err, data, response) {
    console.log(data);
    res.json( {data: data});
  });

});

module.exports = router;
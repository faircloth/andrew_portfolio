var Twit = require('twit')

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//

var express = require('express');
var router = express.Router();


// Search for tweets since June 1
router.post('/twit', function(req, res) {
  
  var search = req.body.search;

  T.get('search/tweets', { q: search + ' since:2016-06-01', count: 100 }, function(err, data, response) {
    console.log(data);
    res.json( {data: data});
  });

});



// //
// //  stream a sample of public statuses
// //
// var stream = T.stream('statuses/sample')

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

// //
// //  filter the twitter public stream by the word 'mango'.
// //
// var stream = T.stream('statuses/filter', { track: 'mango' })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

// //
// // filter the public stream by the latitude/longitude bounded box of San Francisco
// //
// var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

// var stream = T.stream('statuses/filter', { locations: sanFrancisco })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

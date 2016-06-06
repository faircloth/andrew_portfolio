var google  = require('googleapis');
var express = require('express');
var router  = express.Router();

// Search for tweets since June 1
router.get('/google', function() {
  
  var OAuth2 = google.auth.OAuth2;

  var client_id     = process.env.GOOGLE_CLIENT_ID;
  var client_secret = process.env.GOOGLE_CLIENT_SECRET;
  var redirect_url  = process.env.GOOGLE_REDIRECT_URI;

  var oauth2Client = new OAuth2(client_id, client_secret, redirect_url);

  var url = oauth2Client.generateAuthUrl({
    access_type: 'online', // 'online' (default) or 'offline' (gets refresh_token)
    scope: 'https://www.googleapis.com/auth/calendar' // If you only need one scope you can pass it as string
  });

  console.log('url:', url);

  // Get the code from the url

  // oauth2Client.getToken(code, function(err, tokens) {
  //   // Now tokens contains an access_token and an optional refresh_token. Save them.
  //   if(!err) {
  //     oauth2Client.setCredentials(tokens);
  //   }
  // });

  // google.options({ auth: oauth2Client }); // set auth as a global default

});


router.get('/auth', function(req, res) {
  var code = req.body.code;
  console.log(code);

});

module.exports = router;
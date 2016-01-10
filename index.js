'use strict';
const Twitter = require('twit');

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

const T = new Twitter(config);
const userStream = T.stream('user');

userStream.on('tweet', tweet => {
  if(tweet.entities.urls.length > 0){
    const ulrs = tweet.entities.urls.map(v => v.url);
    console.log(tweet.text);
    console.log(ulrs);
  }
});


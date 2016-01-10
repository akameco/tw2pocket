'use strict';
const Twitter = require('twit');
const save    = require('./pocket');

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

const T = new Twitter(config);
const userStream = T.stream('user');

userStream.on('tweet', tweet => {
  const len = tweet.entities.urls.length;
  if(len > 0){
    const url = tweet.entities.urls[len - 1].url;
    save(url).then(v => console.log('saved'));
  }
});


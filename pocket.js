'use strict';
const request = require('request');
const config  = require('./config');

function save(url, key, accessToken) {
  key = key || process.env.POCKET_CONSUMER_KEY;
  accessToken = accessToken || process.env.POCKET_ACCESS_TOKEN;

  const options = {
    headers: config.headers,
    url: config.pocketUrl.add,
    body: `url=${ url }&consumer_key=${ key }&access_token=${ accessToken }`
  };

  return new Promise(resolve => {
    request.post(options, (err, res, body) => {
      resolve(JSON.parse(body));
    });
  });
}

module.exports = save;


'use strict';
let twilio = require('twilio');
const config = require('./config');

let client = new twilio(config.ACCOUNT_SID, config.ACCOUNT_SECRET);

module.exports.messenger = (event, context) => {
  client.messages.create({
    to: config.MY_NUMBER,
    from: config.TWILIO_NUMBER,
    body: 'Take out the trash'
  }, function(err, message) {
    if (err) {
      console.log(err);
    }
  });
};

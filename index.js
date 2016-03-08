var redis = require('redis'),
    httpClient = require('request'),
    Tbot = require('node-telegram-bot-api'),
    Pbot = require('pb-node'),
    config = require('./config');

require('express')().listen(process.env.PORT);

var db = redis.createClient(config.redis.url);

var tbot = new Tbot(config.telegram.token, { polling: true });

var pbot = new Pbot({
  app_id: config.pb.app_id,
  user_key: config.pb.user_key,
  botname: config.pb.botname,
  url: config.pb.url
});

tbot.on('message', (msg) => {

  var fromId = msg.from.id,
      input = msg.text,
      options = { input: input };

  db.get('userid:' + fromId, (err, clientName) => {

    if (clientName) {
      options.client_name = clientName;
      pbot.talk(options, botResponseHandler);
    } else {
      pbot.atalk(options, botResponseHandler);
    }

    function botResponseHandler(err, res) {
      if (err) {
        console.error(err);
        return;
      }
      var output = res.responses.join(' ');
      tbot.sendMessage(fromId, output);
      if (!clientName) {
        db.set('userid:' + fromId, res.client_name, redis.print);
      }
    }
  });
});

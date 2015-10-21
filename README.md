# pb-telegram

Chatbot adapter for the  Telegram Bot API.

## Setup

The pb-telegram app depends on [Redis](http://http://redis.io/) to map Telegram
user IDs to Pandorabots client IDs. To install locally:

OS X:

```
$ brew install redis
```

Linux/Ubuntu:

```
$ apt-get install redis
```

You can then run the redis server from your command line (do this before
starting pb-telegram):

```
$ redis-server
```

Next, clone the application and install its dependencies:

```
$ git clone https://www.github.com/djfdev/pb-telegram.git
$ cd pb-telegram
$ npm install --development
```

You'll also need to create a `.env` file to store some environment variables,
including your credentials for both the Telegram Bot API and the Pandorabots API
(fill in your credentials where appropriate):

```
PB_APP_ID=
PB_USER_KEY=
PB_BOTNAME=
PB_URL=
TELEGRAM_TOKEN=
```

Now you can run pb-telegram from the command line:

```
$ npm start
```

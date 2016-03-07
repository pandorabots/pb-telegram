if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var config = {
  pb: {
    app_id: process.env.PB_APP_ID,
    user_key: process.env.PB_USER_KEY,
    botname: process.env.PB_BOTNAME,
    url: process.env.PB_URL
  },
  telegram: {
    token: process.env.TELEGRAM_TOKEN
  },
  redis: {
    url: process.env.REDISTOGO_URL
  }
};

module.exports = config;

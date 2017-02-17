require('dotenv').config({ silent: true });

const app = require('dexpress').app;

require('dcontrollers')(app, [
  require('./controllers/flash-briefing'),
]);

const skill = new (require('dalexa').Skill)();
skill.onIntents([
  require('./intents/hello'),
]);

app.post('/', require('body-parser').json(), skill.getExpressHandler());

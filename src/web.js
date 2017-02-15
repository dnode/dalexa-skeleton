require('dotenv').config({ silent: true });

const app = require('dexpress').app;
app.use(require('body-parser').json());

const skill = new (require('dalexa').Skill)();
skill.onIntents([
  require('./intents/hello'),
]);

app.post('/', skill.getExpressHandler());

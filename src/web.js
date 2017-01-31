require('dotenv').config({ silent: true });

const app = require('dexpress')();
app.use(require('body-parser').json());

const skill = new (require('./lib').Skill)();
skill.onIntents([
  require('./intents/example'),
]);

app.post('/', skill.getExpressHandler());

const dotenv = require('dotenv');
const requireEnv = require('require-environment-variables');

function configure() {
  dotenv.config({ path: './env/.env' });
  requireEnv([
    'NHSCHOICES_SYNDICATION_APIKEY',
    'NHSCHOICES_SYNDICATION_BASEURL',
  ]);
}

module.exports = {
  configure,
};
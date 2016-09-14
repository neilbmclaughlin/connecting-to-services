const express = require('express');
const validateLocation = require('./lib/locationValidator');
const render = require('./lib/renderer');
const http = require('http');
const dotenv = require('dotenv');
const requireEnv = require('require-environment-variables');

dotenv.config({ path: './env/.env' });
requireEnv([
  'NHSCHOICES_SYNDICATION_APIKEY',
  'NHSCHOICES_SYNDICATION_BASEURL',
]);

const app = express();

function getResults(req, res, next) {
  const postcode = req.query.location;
  const apikey = process.env.NHSCHOICES_SYNDICATION_APIKEY;

  http
    .get(`http://v1.syndication.nhschoices.nhs.uk/organisations/pharmacies/postcode/${postcode}?apikey=${apikey}`, () => {
      next();
    });
}

app.get('/results-open',
  validateLocation,
  // go get results
  getResults,
  render
);

module.exports = app;

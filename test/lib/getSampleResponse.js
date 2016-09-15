const fs = require('fs');

const sampleResponsesDir = `${__dirname}/resources/syndication_responses`;

function getSampleResponse(responseName) {
  return fs.readFileSync(`${sampleResponsesDir}/${responseName}.xml`).toString();
}

module.exports = getSampleResponse;


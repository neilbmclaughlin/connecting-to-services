module.exports = {
  entry: {
    nhsuk: [
      './assets/javascripts/nhsuk.js',
    ],
    webtrends: [
      './assets/javascripts/vendor/webtrends/webtrends.js',
    ],
  },

  output: {
    path: './public/js/',
    filename: '[name].bundle.js',
  },
};

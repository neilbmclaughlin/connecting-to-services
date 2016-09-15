const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || 'development';
const appName = 'connecting-to-services';

const config = {
  development: {
    root: rootPath,
    app: {
      name: appName,
    },
    port: process.env.PORT || 3000,
  },

  test: {
    root: rootPath,
    app: {
      name: appName,
    },
    port: process.env.PORT || 3000,
  },

  production: {
    root: rootPath,
    app: {
      name: appName,
    },
    port: process.env.PORT || 3000,
  },
};

module.exports = config[env];
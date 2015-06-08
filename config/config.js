var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'jobs-node-express'
    },
    port: 3000,
    db: 'mongodb://localhost/jobs-node-express-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'jobs-node-express'
    },
    port: 3000,
    db: 'mongodb://localhost/jobs-node-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'jobs-node-express'
    },
    port: 3000,
    db: 'mongodb://localhost/jobs-node-express-production'
  }
};

module.exports = config[env];

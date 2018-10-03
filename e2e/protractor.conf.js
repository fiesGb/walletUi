var suitesFile = require('./suites.js');

exports.config = {
  baseUrl: '',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  allScriptsTimeout: 30000,
  ignoreUncaughtExceptions: true,

  framework: 'custom',
  frameworkPath: require.resolve('serenity-js'),

  suites: suitesFile.suitesCollection,

  cucumberOpts: {
    require: ['./features/**/*.ts'],
    format: 'pretty',
    compiler: 'ts:ts-node/register',
    tags: '~@ignore',
  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      // args: ['disable-infobars', '--disable-gpu', '--window-size=1200,800', '--headless'],
      args: ['disable-infobars', '--disable-gpu', '--window-size=1200,800'],
    },
  },

  restartBrowserBetweenTests: false,

  maxSessions: 1,

  useAllAngular2AppRoots: true,
};

var webpackConfig = require('./webpack-test.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.spec.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*spec.ts': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['mocha'],
    mochaReporter: {
      showDiff: true,
    },
    client: {
      mocha: {
        reporter: 'html'
      }
    },
    port: 3001,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}

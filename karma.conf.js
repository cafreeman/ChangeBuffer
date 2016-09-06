var webpackConfig = require('./webpack-test.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'src/test/**/*.spec.ts',
      'typings/index.d.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/test/**/*.spec.ts': ['webpack']
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
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}

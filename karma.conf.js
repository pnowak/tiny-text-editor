module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'build/js/**/*.js',
      'build/tests/**/test_*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'bundle.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'text-summary'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true
  });
};
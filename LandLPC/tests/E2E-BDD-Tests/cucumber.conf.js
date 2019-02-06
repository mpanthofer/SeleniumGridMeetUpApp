//protractor config
exports.config = {
    
capabilities: {
    'browserName': 'chrome'
    },
    seleniumAddress: 'http://progrid:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    //directConnect: true,
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
     // Spec patterns are relative to this directory.
    specs: [
    'features/*.feature'
    ],
    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        tags: false,
        monochrome: true,
        strict: true,
        plugin: ["pretty"],
        format: 'json: output.txt',
        profile: false,
        'no-source': true
    }
  }
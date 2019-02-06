exports.config = {
    framework: 'jasmine',
    capabilities: {
     'browserName': 'chrome'
    },
    seleniumAddress: 'http://progrid2:4444/wd/hub',
    specs: [
        'E2ETests/*'
    ]
  }
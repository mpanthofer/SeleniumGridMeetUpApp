module.exports.World = function World(callback) {
  var chai = require('chai'),
    //expect = require('chai').expect,
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised'),
    browserName = 'chrome',
    protractor = require('protractor'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
.usingServer('http://progrid:4444/wd/hub')
.withCapabilities(webdriver.Capabilities[browserName]())
.build()

//var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


driver.manage().timeouts().setScriptTimeout(100000);

var browser = protractor.wrapDriver(driver);

  this browser = browser;
  this driver = driver;
  this By = protractor.By;
  this p = protractor;
  this expect = expect = chai.expect;
  this chaiAsPromised = require('chai-as-promised');
  this chai = chai = require('chai');
  callback();
};


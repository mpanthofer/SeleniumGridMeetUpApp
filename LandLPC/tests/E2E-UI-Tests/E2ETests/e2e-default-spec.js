describe('Selenium Grid Demo App Welcome page', function() {
    it('should have a title equal Docker Meet Up App Information', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/home');
      browser.driver.sleep(10000);
      let title = element(by.tagName('h1')).getText();
        expect(title).toEqual('Docker Meet Up App Information');
    });
  });
  
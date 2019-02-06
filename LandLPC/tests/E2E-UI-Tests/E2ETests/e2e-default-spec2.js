describe('Selenium Grid Demo App Signup page', function() {

    it('should go to the volunteer signup page', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/Volunteer/VolunteerSignup');
        browser.driver.sleep(10000);
        let title = element(by.tagName('h1')).getText();
        expect(title).toEqual('Welcome to the Volunteer Signup page');
    });

    it('should have a empty name input box', function() {
        let nameinput = element(by.id('name')).getText();
        expect(nameinput).toEqual('');  
        browser.driver.sleep(5000);
    });
  });
  
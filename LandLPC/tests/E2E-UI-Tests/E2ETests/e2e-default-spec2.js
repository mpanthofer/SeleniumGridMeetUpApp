describe('Selenium Grid Demo App Signup page', function() {

    it('should go to the volunteer signup page', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/Volunteer/VolunteerSignup');
        browser.driver.sleep(2000);
        let title = element(by.tagName('h1')).getText();
        expect(title).toEqual('Welcome to the Volunteer Signup page');
    });

    it('should have a empty name input box', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/Volunteer/VolunteerSignup');
        browser.driver.sleep(2000);
        let nameinput = element(by.id('Name')).getText();
        expect(nameinput).toEqual('');  
    });

    it('should have a empty nick name input box', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/Volunteer/VolunteerSignup');
        browser.driver.sleep(2000);
        let nameinput = element(by.id('NicName')).getText();
        expect(nameinput).toEqual('');
    });

    it('should have a empty age input box', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/Volunteer/VolunteerSignup');
        browser.driver.sleep(2000);
        let nameinput = element(by.id('Age')).getText();
        expect(nameinput).toEqual('');
    });

    it('should submit when all fields are validated', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/Volunteer/VolunteerSignup');
        browser.driver.sleep(2000);
        element(by.id('Name')).sendKeys("John");
        browser.driver.sleep(2000);
        element(by.id('NicName')).sendKeys("Johnny");
        browser.driver.sleep(2000);
        element(by.id('Age')).sendKeys("23");
        browser.driver.sleep(2000);
        element(by.id('Ethnicity')).sendKeys("Other");
        browser.driver.sleep(2000);
        element(by.id('PhoneNumber')).sendKeys("(262)555-7777");
        browser.driver.sleep(2000);
        element(by.id('Email')).sendKeys("itsjohnny@no.com");
        browser.driver.sleep(10000);
        let nameinput2 = element(by.id('Name')).getAttribute('value');
        let nicnameinput2 = element(by.id('NicName')).getAttribute('value');
        let ageinput2 = element(by.id('Age')).getAttribute('value');
        let ethnicityinput2 = element(by.id('Ethnicity')).getAttribute('value');
        let numberinput2 = element(by.id('PhoneNumber')).getAttribute('value');
        let emailinput2 = element(by.id('Email')).getAttribute('value');
        expect('John').toEqual(nameinput2); 
        expect('Johnny').toEqual(nicnameinput2);
        expect('23').toEqual(ageinput2);
        expect('Other').toEqual(ethnicityinput2);
        expect('(262)555-7777').toEqual(numberinput2);
        expect('itsjohnny@no.com').toEqual(emailinput2);
        var el = element(by.id('AddVolunteer'));
        el.click();
    });

    it('should have been added to the database', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://coreonlinux:6089/VolunteerCrud');
        let name = element(by.tagName('tr td')).getText();
        expect('John').toEqual(name);
        browser.driver.sleep(10000);
        
    });

  });
  
FROM node

# Make new directory for volume
RUN mkdir cucumberProtractorTest

# Make new directory for app after copy
RUN mkdir cucumberProtractorWorkDir

# Change directory to newly created directory
WORKDIR /cucumberProtractorWorkDir

# RUN protractor install -g 
RUN npm install -g protractor

# RUN WebDriver Install/Update
RUN npm install -g webdriver-manager
RUN webdriver-manager update

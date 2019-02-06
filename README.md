# SELENIUM GRID DEMO 

A basic demo that uses Selenium Gird to run UI and E2E tests

## GETTING STARTED

Clone git repo

Run at root of project - docker image build -t testcoreimage . 

Run in folder LandLPC\tests\E2E-UI-Tests\  - docker image build -t cucumberprotest .

Run at root of project docker-compose up or docker-compose up -d

## STARTING THE DOTNET APP

Run docker exec -it <nameoftestcoreimagecontainer> bash

Run dotnet restore

Run dotnet build

Run dotnet ef dotnet ef database update

Run dotnet run

## RUN E2E & UI TESTS

Run docker exec -it <nameofcucumberprotestcontainer> bash

Run npm install

Run npm run protractor-test

## CHROME VNC VIEWER

Chrome VNC viewer is used to watch the tests execute in the Chrome browser.

Download Chrome VNC viewer

Get port name of Chrome node

Log into Chrome VNC viewer with localhost:containerport

Default Password = secret

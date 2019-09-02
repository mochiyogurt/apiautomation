1.    Download Java on mac

2.    Download NodeJS on mac

3.    Setup Environment Variables on mac
exportJAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home

export PATH=${JAVA_HOME}/bin:$PATH

export PATH=$PATH:/usr/local/bin/node

export PATH=$PATH:/usr/local/bin/npm

4.    npm install frisby --save-dev on mac or npm install -g frisby

5.    sudo npm install -g jest on mac (I needed to do sudo then I got it installed or else jest is missing)



FRISBY API AUTOMATION TESTS

1.    On VSCode: npm install frisby - -save-dev

2.    On VSCode: sudo npm install -g jest

3.    By default, Jest looks for a folder named __tests__.If it does not exist in your project yet, go ahead and create it:


mkdir -p __tests__/api

touch __tests__/api/api_spec.js

Open api_spec.js and add
const frisby = require('frisby');

4. On VSCODE: npm init to create package.json file
5. Run test by typing jest

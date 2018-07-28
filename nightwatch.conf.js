const seleniumServer = require("selenium-server");

const config = { // we use a nightwatch.conf.js file so we can include comments and helper functions
  "src_folders": [
    "test"     // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
  ],
  "output_folder": "./node_modules/nightwatch/reports", // reports (test outcome) output by Nightwatch
  "selenium": {
    "start_process": false,
    "server_path": seleniumServer.path,
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : "./chromedriver",
      "webdriver.geck.driver" : "./geckdriver"
    }
  },
  "test_workers" : {"enabled" : false, "workers" : "auto"}, // perform tests in parallel where possible
  "test_settings": {
    "firefox" : {
          "launch_url" : "http://localhost",
          "selenium_port"  : 4444,
          "selenium_host"  : "localhost",
          "silent": false,
          "screenshots" : {
            "enabled" : false,
            "path" : ""
          },
          "desiredCapabilities": {
            "browserName": "firefox",
            "marionette": true,
            "moz:firefoxOptions": {
               args: [

               ]
            }
          }
    },
    "chrome" : {
           "desiredCapabilities": {
            "browserName": "chrome",
            "globals": {
                "waitForConditionTimeout": 15000 // on localhost sometimes internet is slow so wait...
            },
            "goog:chromeOptions": {
                args: [
                ]
            }
           }
    }
  }
}
module.exports = config;




module.exports = {
  'Demo test Bing': function (browser) {
    browser
      .url('http://www.bing.com')   // visit the url
      .waitForElementVisible('body', 5000)
      .assert.containsText('#sbox div[class="hp_sw_logo hpcLogoWhite"]', 'Bing'); // wait for the body to be rendered
    browser.end();
  }
}
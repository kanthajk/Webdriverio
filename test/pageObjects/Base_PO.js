const baseConfig = require("../../config/main-config");

export default class Base_PO {
  openUrl() {
    browser.setWindowSize(1800, 1200);
    browser.url(baseConfig.baseUrl + "/?" + baseConfig.queryParameters);
    console.log("URL opened.");
  }

  waitUsingFixedTimeout(time) {
    console.log("Pausing for: " + time + " seconds.");
    browser.pause(time);
  }

  //method to check webelement visibility
  isVisible(selector) {
    return browser.isVisible();
  }
}

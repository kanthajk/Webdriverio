module.exports = {
  browser: "chrome",
  baseUrl: "https://www.espncricinfo.com",
  queryParameters : "country=in&adtar=pc12345&_adblock=true",
  logLevel: "info",
  maxInstances: 1,
  bail: 0,
  stepDefinitionTimeout: 60000,
  waitForTimeout: 15000
};

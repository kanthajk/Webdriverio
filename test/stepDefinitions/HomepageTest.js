import Homepage_PO from "../pageObjects/Homepage_PO";
import { Given, When, Then } from "cucumber";

Given(/^I'm a Cricinfo user$/, function() {
  console.log("I'm, a cricinfo user.");
});

When(/^I landed to the cricinfo home page$/, function() {
  Homepage_PO.openUrl();
});

Then(/^I expect the title should match$/, function() {
  let browserTitle = browser.getTitle();
  console.log("Title of the page -> " + browserTitle);
  expect(browserTitle).to.equal(
    "Check Live Cricket Scores, Match Schedules, News, Cricket Videos Online | ESPNcricinfo.com"
  );
});







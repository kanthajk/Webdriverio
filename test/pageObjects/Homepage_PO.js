import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
  openUrl() {
    super.openUrl();
  }

  // method to get title of the page
  getTitle() {
    return browser.getTitle();
  }

  //key series module
  get keySeriesWebElement() {
    return $("//div[@class='quicklinks__container'][1]");
  }
}

export default new Homepage_PO();

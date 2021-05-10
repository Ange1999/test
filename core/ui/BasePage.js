module.exports = class BasePage {
  
open(url){
    return browser.url(url);
}
}



import { browser, element, by } from 'protractor';

export class Angularfire2AgradePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

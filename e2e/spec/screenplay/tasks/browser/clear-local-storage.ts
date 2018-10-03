import { protractor } from 'protractor';
import { Task, PerformsTasks } from '@serenity-js/core/lib/screenplay';

export class ClearLocalStorage implements Task {
  static ofTheBrowser() {
    return new ClearLocalStorage();
  }

  performAs(actor: PerformsTasks) {
    return protractor.browser.executeScript('window.localStorage.clear();') as PromiseLike<void>;
  }

  toString = () => '#actor clears the browsers local storage';
}

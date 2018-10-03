import { protractor } from 'protractor';
import { Task, PerformsTasks } from '@serenity-js/core/lib/screenplay';

export class ClearSessionStorage implements Task {
  static ofTheBrowser() {
    return new ClearSessionStorage();
  }

  performAs(actor: PerformsTasks) {
    return protractor.browser.executeScript('window.sessionStorage.clear();') as PromiseLike<void>;
  }

  toString = () => '#actor clears the browsers session storage';
}

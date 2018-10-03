import { Interaction, UsesAbilities } from '@serenity-js/core/lib/screenplay';
import { BrowseTheWeb, Target, WebElement } from 'serenity-js/lib/serenity-protractor';

export class Clear implements Interaction {

  static Input(target: Target) {
    return new Clear(target);
  }

  constructor(private target: Target) {
  }

  performAs(actor: UsesAbilities) {
    return BrowseTheWeb.as(actor).executeScript('arguments[0].value = "";', WebElement.of(this.target).answeredBy(actor));
  }

  toString = () => '#actor clears the input field';
}

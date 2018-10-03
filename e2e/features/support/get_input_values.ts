import { Question, UsesAbilities } from '@serenity-js/core/lib/screenplay';
import { element } from 'protractor';
import { Target } from 'serenity-js/lib/serenity-protractor';

export class GetInputValues implements Question<PromiseLike<string[]>> {

  constructor(private target: Target) {
  }

  static of(target: Target) {
    return new GetInputValues(target);
  }

  answeredBy(actor: UsesAbilities) {
    const result: string[] = [];
    const selector = (this.target.of('') as any).locator;
    return element.all(selector).each((item, index) => {
      item.getAttribute('value').then(value => {
        result[ index ] = value;
      });
    }).then(() => {
      return result;
    }) as PromiseLike<string[]>;
  }
}

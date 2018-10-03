import { BrowseTheWeb, Question, Target, UsesAbilities } from 'serenity-js/protractor';

export class NumberOfElements implements Question<PromiseLike<number>> {
  public static ofType(target: Target): NumberOfElements {
    return new NumberOfElements(target);
  }

  answeredBy(actor: UsesAbilities): PromiseLike<number> {
    return BrowseTheWeb.as(actor)
      .locateAll(this.target)
      .count() as PromiseLike<number>;
  }

  constructor(private target: Target) {}
}

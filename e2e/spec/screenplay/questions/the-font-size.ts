import { BrowseTheWeb, Question, Target, UsesAbilities } from 'serenity-js/protractor';

export class TheFontSize implements Question<PromiseLike<string>> {
  public static of(target: Target): TheFontSize {
    return new TheFontSize(target);
  }

  answeredBy(actor: UsesAbilities): PromiseLike<string> {
    return BrowseTheWeb.as(actor)
      .locate(this.target)
      .getCssValue('font-size');
  }

  constructor(private target: Target) {}
}

import { serenity } from '@serenity-js/core/lib';
import { protractor } from 'protractor';
import { Actor } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/serenity-protractor';

export default function() {
  this.World = () => {
    // stage
    this.stage = serenity.callToStageFor({
      actor: name => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser)),
    });
  };
}

import { Open } from 'serenity-js/protractor';
import { UrlService } from '../../../services/url-service';

export default function browserNavigationUserSteps() {

  this.Given(/^that (.*) navigated to the home URL$/, (actorName: string) => {
    const world = this;
    return world.stage.theActorCalled(actorName).attemptsTo(
      Open.browserOn(UrlService.getBaseUrl())
    );
  });
}

import { See, WebElement, Text } from 'serenity-js/protractor';
import { isDisplayed, equals } from '../../../spec/assertions';
import { Dashboard } from '../../../spec/screenplay/components/dashboard';

export default function seeDashboardUserSteps() {

  this.Then(/^s?he should see the dashboard header with content "(.*)"$/, (expectedMainHeaderContent: string) => {
    const world = this;
    return world.stage.theActorInTheSpotlight().attemptsTo(
      See.if(WebElement.of(Dashboard.Header), isDisplayed),
      See.if(Text.of(Dashboard.Header), equals(expectedMainHeaderContent))
    );
  });
}

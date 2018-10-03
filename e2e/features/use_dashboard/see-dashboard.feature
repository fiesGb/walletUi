Feature: See Dashboard

In order to have a good overview over my finances
As a finUI user
I want to see the dashboard after navigating to the home URL

Scenario: See dashboard after navigation to home URL
Given that Endivie navigated to the home URL
Then she should see the dashboard header with content "Top Transactions"

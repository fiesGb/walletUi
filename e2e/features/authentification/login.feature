Feature: Login

In order to use wallet for my finance shit
As me
I want to login to wallet

@smoke @auth @positive
Scenario: Log in with valid credentials
Given that Endivie has navigated to the login page
When she tries to log in with valid credentials
Then she should be logged in to wallet

@smoke @auth @positive
Scenario: Log out from dashboard view
Given that Endivie has navigated to the dashboard
When she tries to log out
Then she should be logged out

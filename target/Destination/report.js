$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/hightolow.feature");
formatter.feature({
  "name": "UserShouldBeAbleToSortProductHighToLowByPrice",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "UserShouldBeAbleToSortProductHighToLowByPrice",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hightolow"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on computer categories",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.clickOnComputerCategories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see price arranged from High To low",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userAbleToSeePriceArrangedFromHighToLow()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
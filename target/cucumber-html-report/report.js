$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("001HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Victor Homepage",
  "description": "",
  "id": "validating-victor-homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validating Login Feature",
  "description": "",
  "id": "validating-victor-homepage;validating-login-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User open browser \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"\u003cVictor\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates victor Userhome page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validating-victor-homepage;validating-login-feature;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Victor",
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "validating-victor-homepage;validating-login-feature;;1"
    },
    {
      "cells": [
        "firefox",
        "https://v3-staging.flyvictor.com/en-gb/#/",
        "naveen.stage@gmail.com",
        "Testing1"
      ],
      "line": 13,
      "id": "validating-victor-homepage;validating-login-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Validating Login Feature",
  "description": "",
  "id": "validating-victor-homepage;validating-login-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User open browser \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"https://v3-staging.flyvictor.com/en-gb/#/\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"naveen.stage@gmail.com\" and \"Testing1\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates victor Userhome page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.user_open_browser(String)"
});
formatter.result({
  "duration": 13247925769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://v3-staging.flyvictor.com/en-gb/#/",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.user_navigates_to_page(String)"
});
formatter.result({
  "duration": 10683863361,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_on_login()"
});
formatter.result({
  "duration": 3488461244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveen.stage@gmail.com",
      "offset": 12
    },
    {
      "val": "Testing1",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.user_enter_and(String,String)"
});
formatter.result({
  "duration": 2036181696,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_on_Signin_button()"
});
formatter.result({
  "duration": 519174097,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_victor_Userhome_page()"
});
formatter.result({
  "duration": 28225,
  "status": "passed"
});
});
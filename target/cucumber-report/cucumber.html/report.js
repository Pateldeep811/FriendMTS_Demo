$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/friendMTS.feature");
formatter.feature({
  "line": 1,
  "name": "HomePageMenuTest",
  "description": "As a user i should navigate to Services by click.",
  "id": "homepagemenutest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11681728300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify i should able to click on Contact Us",
  "description": "",
  "id": "homepagemenutest;verify-i-should-able-to-click-on-contact-us",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Contact Us.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am navigated on Contact Us Page.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 266147300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnContactUs()"
});
formatter.result({
  "duration": 1699244500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnContactUsPage()"
});
formatter.result({
  "duration": 45600,
  "status": "passed"
});
formatter.after({
  "duration": 343500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "verify i should navigate inside the About us page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mousehover on About us \"\u003cAbout us\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About us page.",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;",
  "rows": [
    {
      "cells": [
        "About us"
      ],
      "line": 14,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;1"
    },
    {
      "cells": [
        "Company overview"
      ],
      "line": 15,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;2"
    },
    {
      "cells": [
        "Who we are"
      ],
      "line": 16,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;3"
    },
    {
      "cells": [
        "News \u0026 Resources"
      ],
      "line": 17,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;4"
    },
    {
      "cells": [
        "Events"
      ],
      "line": 18,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;5"
    },
    {
      "cells": [
        "Customers"
      ],
      "line": 19,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6255025400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify i should navigate inside the About us page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mousehover on About us \"Company overview\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About us page.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 4506300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company overview",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMousehoverOnAboutUs(String)"
});
formatter.result({
  "duration": 3440805200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutUsPage()"
});
formatter.result({
  "duration": 62500,
  "status": "passed"
});
formatter.after({
  "duration": 58000,
  "status": "passed"
});
formatter.before({
  "duration": 6882359100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verify i should navigate inside the About us page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mousehover on About us \"Who we are\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About us page.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 8358700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Who we are",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMousehoverOnAboutUs(String)"
});
formatter.result({
  "duration": 4214484500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutUsPage()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.after({
  "duration": 46400,
  "status": "passed"
});
formatter.before({
  "duration": 17880989800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify i should navigate inside the About us page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mousehover on About us \"News \u0026 Resources\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About us page.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 7828400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News \u0026 Resources",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMousehoverOnAboutUs(String)"
});
formatter.result({
  "duration": 12389886400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutUsPage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.after({
  "duration": 63100,
  "status": "passed"
});
formatter.before({
  "duration": 7830927600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify i should navigate inside the About us page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mousehover on About us \"Events\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About us page.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 3697400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Events",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMousehoverOnAboutUs(String)"
});
formatter.result({
  "duration": 5296625800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutUsPage()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.after({
  "duration": 56000,
  "status": "passed"
});
formatter.before({
  "duration": 9674611600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify i should navigate inside the About us page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-about-us-page.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mousehover on About us \"Customers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About us page.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 4209200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customers",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMousehoverOnAboutUs(String)"
});
formatter.result({
  "duration": 6107356000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutUsPage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.after({
  "duration": 51300,
  "status": "passed"
});
formatter.before({
  "duration": 8346872700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the Display Message",
  "description": "",
  "id": "homepagemenutest;verify-the-display-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I will be able to see the Message \"ASiD 4th Generation\" on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 5265000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASiD 4th Generation",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.iWillBeAbleToSeeTheMessageOnThePage(String)"
});
formatter.result({
  "duration": 188314600,
  "status": "passed"
});
formatter.after({
  "duration": 50000,
  "status": "passed"
});
});
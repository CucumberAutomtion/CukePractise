Feature: Validating Victor Homepage

Scenario Outline: Validating Login Feature
Given User open browser "<Browser>"
Given User navigates to "<Victor>" page
When User click on login
And User enter "<Username>" and "<Password>"
And User click on Signin button
Then User navigates victor Userhome page

Examples:
|Browser|Victor                                   |Username              |Password|
|firefox|https://v3-staging.flyvictor.com/en-gb/#/|naveen@gmail.com|Testing2|
                      

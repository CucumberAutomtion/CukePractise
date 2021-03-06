package com.cukepractise.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
@CucumberOptions(
		monochrome = true,
		features = "src/test/java/com/cukepractise/testcases",
		plugin = {"pretty", "html:target/cucumber-html-report"},
		glue="com/cukepractise/testcases/")
public class Runner extends AbstractTestNGCucumberTests{

}

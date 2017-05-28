package com.cukepractise.testcases;

import org.openqa.selenium.support.PageFactory;

import com.cukepractise.base.TestBase;
import com.cukepractise.pages.HomePage;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions extends TestBase{
	
	TestBase cucumber=new TestBase();
	@Given("^User open browser \"([^\"]*)\"$")
	public void user_open_browser(String browser) throws Throwable {
	    cucumber.openBrowser(browser);
	}

	@Given("^User navigates to \"([^\"]*)\" page$")
	public void user_navigates_to_page(String url) throws Throwable {
	    cucumber.navigate(url);
	}

	@When("^User click on login$")
	public void user_click_on_login() throws Throwable {
	    System.out.println("Login button clicked");
	    HomePage hp=PageFactory.initElements(driver, HomePage.class);
	    hp.clikonlogin();
	}

	@When("^User enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String Username, String Password) throws Throwable {
		HomePage hp=PageFactory.initElements(driver, HomePage.class);
		hp.credentials(Username, Password);
	}
	@When("^User click on Signin button$")
	public void user_click_on_Signin_button() throws Throwable {
		HomePage hp=PageFactory.initElements(driver, HomePage.class);
		hp.enter();
	}


	@Then("^User navigates victor Userhome page$")
	public void user_navigates_victor_Userhome_page() throws Throwable {
	    
	}


}

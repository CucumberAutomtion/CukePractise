package com.cukepractise.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;





public class HomePage {
    public WebDriver driver;
	public HomePage(WebDriver driver)
	{
		this.driver=driver;
	}
	
	@FindBy(xpath="//*[@id='menu-x-demo-menu']/li[6]/a[1]")
	WebElement Login;
	
	@FindBy(xpath="//*[@id='login-email']") WebElement username;
	
	@FindBy(xpath="//*[@id='login-password']") WebElement password;
	
	@FindBy(css=".btn.btn-success.ladda-button.user-login-modal__cta.user-login-modal__cta--login") WebElement signin;
	
	public void clikonlogin()
	{
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		Login.click();
		
		
    }
	
	public void credentials(String Username,String Password)
	{
	    username.sendKeys(Username);
	    password.sendKeys(Password);
	    
	}
	public void enter()
	{
		signin.click();
		
		
	}
}

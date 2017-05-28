package com.cukepractise.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



public class TestBase {
	
	public static WebDriver driver;
	
	public void openBrowser(String browser)
	{
		if(browser.equalsIgnoreCase("firefox"))
		{
			driver=new FirefoxDriver();
			driver.manage().window().maximize();
		}
		else if(browser.equalsIgnoreCase("chrome"))
		{
			driver=new ChromeDriver();
			driver.manage().window().maximize();
		}
	}
	public void closeBrowser()
	{
		driver.quit();
	}
	public void navigate(String url)
	{
		driver.get(url);
	}
    public void text()
    {
    	System.out.println("naveen");
    }
}

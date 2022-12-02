package com.friendmts.pages;

import com.friendmts.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[text()='Contact Us']")
    WebElement clickContactUs;

    public void clickOnContactUsbutton ()
    {
        clickOnElement(clickContactUs);
    }
    @CacheLookup
    @FindBy(xpath = "//span[text()='About us']")
    WebElement AboutUs;
    @CacheLookup
    @FindBy(xpath = "//li[@class='has-submenu']/ul/li")
    List<WebElement> AboutUsList;

    public void mouseHoverOnAboutus (String module) throws InterruptedException
    {
        for (WebElement listmenu : AboutUsList){
            mouseHoverToElement(AboutUs);
            if (listmenu.getText().equalsIgnoreCase(module)){
                Thread.sleep(2000);
                listmenu.click();
                break;
            }
        }
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='ASiD 4th Generation']")
    WebElement verifytext;

    public String VerifyText() {
        return getTextFromElement(verifytext);
    }

}


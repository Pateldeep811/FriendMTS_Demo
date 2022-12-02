package com.friendmts.steps;

import com.friendmts.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MyStepdefs {
    HomePage homePage = new HomePage();
    @Given("^I am on home page\\.$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Contact Us\\.$")
    public void iClickOnContactUs() {
        homePage.clickOnContactUsbutton();
    }

    @Then("^I am navigated on Contact Us Page\\.$")
    public void iAmNavigatedOnContactUsPage() {
    }

    @When("^I mousehover on About us \"([^\"]*)\"$")
    public void iMousehoverOnAboutUs(String list) throws InterruptedException {
    homePage.mouseHoverOnAboutus(list);
    }

    @And("^I am navigated on About us page\\.$")
    public void iAmNavigatedOnAboutUsPage() {
    }

    @Then("^I will be able to see the Message \"([^\"]*)\" on the page$")
    public void iWillBeAbleToSeeTheMessageOnThePage(String txt) {
        Assert.assertEquals(txt,homePage.VerifyText());
    }
}

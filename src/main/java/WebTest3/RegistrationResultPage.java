package WebTest3;

import org.openqa.selenium.By;
import org.testng.Assert;

public class RegistrationResultPage extends Utils {

    private By _registerSuccessMessage = By.className("result");
    String expected = "Your registration completed";

    public void verifyUserSeeRegistrationSuccessMessage() {
        assertURL("registerresult");
        assertTextMessage("", expected, _registerSuccessMessage);
    }
}

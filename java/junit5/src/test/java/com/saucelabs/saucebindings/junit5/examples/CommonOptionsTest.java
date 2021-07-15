package com.saucelabs.saucebindings.junit5.examples;

import com.saucelabs.saucebindings.SaucePlatform;
import com.saucelabs.saucebindings.junit5.SauceBaseTest;
import com.saucelabs.saucebindings.options.SauceOptions;
import org.junit.jupiter.api.Test;

// 1. Extend the provided base test class
public class CommonOptionsTest extends SauceBaseTest {

    // 2. Create SauceOptions instance with common options
    public SauceOptions createSauceOptions() {
        return SauceOptions.firefox()
                .setBrowserVersion("85.0")
                .setPlatformName(SaucePlatform.WINDOWS_8)
                .build();
    }

    @Test
    public void basicOptions() {
        // 3. Session and Driver are created automatically by superclass

        // 4. Use the driver in your tests just like normal
        driver.get("https://www.saucedemo.com/");

        // 5. Session is stopped and results are sent to Sauce Labs automatically by the superclass
    }
}

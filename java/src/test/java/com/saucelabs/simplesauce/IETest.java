package com.saucelabs.simplesauce;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class IETest extends BaseTestConfiguration {
    @Test
    public void withIE_validIeVersionEnum() {
        sauceOptions.withIE(IEVersion._11);

        String actualBrowserSetInConfig = sauceOptions.getBrowserVersion();
        assertEquals("11.285", actualBrowserSetInConfig);
    }

    @Test
    public void withIE_validIeVersionString() {
        sauceOptions.withIE(IEVersion._11.getVersion());

        String actualBrowserSetInConfig = sauceOptions.getBrowserVersion();
        assertEquals("11.285", actualBrowserSetInConfig);
    }

    @Test
    public void withIE_default() {
        sauceOptions.withIE();

        String actualBrowserSetInConfig = sauceOptions.getBrowserVersion();
        assertEquals("latest", actualBrowserSetInConfig);
    }
}

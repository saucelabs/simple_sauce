package com.saucelabs.simplesauce.unit;

import com.saucelabs.simplesauce.IEVersion;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class IETests extends BaseConfigurationTest{
    @Test
    public void withIE_validIeVersion() {
        sauceOptions.withIE(IEVersion._11);
        mockSauceSession = instantiateSauceSession();

        mockSauceSession.start();
        String actualBrowserSetInConfig = mockSauceSession.sauceSessionCapabilities.getVersion();
        assertEquals("11.285", actualBrowserSetInConfig);
    }
}

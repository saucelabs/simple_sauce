package com.saucelabs.simplesauce;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class SauceOptionsTest {
    private SauceSession sauceSession;
    private SauceOptions options;

    @Before
    public void setUp()
    {
        options = new SauceOptions();
    }

    @Test
    public void sauceSession_takesSauceOptions() {
        sauceSession = new SauceSession(options);
        assertNotNull(sauceSession);
    }

    @Test
    public void sauceOptions_defaultBrowser_setToChrome() {
        assertEquals("chrome", options.getBrowserName());
    }

    @Test
    public void sauceOptions_defaultBrowserVersion_setToLatest() {
        assertEquals("latest", options.getBrowserVersion());
    }

    @Test
    public void sauceOptions_defaultOS_setToWindows() {
        assertEquals("Windows 10", options.getOperatingSystem());
    }

    @Test
    public void withChrome_browser_setToChrome() {
        options.withChrome();
        assertNotNull(options.getChromeOptions());
    }
}

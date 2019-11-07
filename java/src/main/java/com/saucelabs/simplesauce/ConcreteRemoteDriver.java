package com.saucelabs.simplesauce;

import com.saucelabs.simplesauce.interfaces.RemoteDriverInterface;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class ConcreteRemoteDriver implements RemoteDriverInterface {
    private RemoteWebDriver remoteDriver;

    public RemoteWebDriver createRemoteWebDriver(String seleniumServer, MutableCapabilities capabilities)
        throws MalformedURLException
    {
        remoteDriver = new RemoteWebDriver(new URL(seleniumServer), capabilities);
        return remoteDriver;
    }

    @Override
    public void quit() {
        remoteDriver.quit();
    }
}

package com.saucelabs.simplesauce;

import lombok.Getter;
import lombok.Setter;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.CapabilityType;

import java.util.HashMap;

public class SauceOptions {
    @Getter private MutableCapabilities seleniumCapabilities;

    @Getter @Setter private String browserName = BrowserType.CHROME;
    @Getter @Setter private String browserVersion = "latest";
    @Getter @Setter private String platformName = Platforms.windowsLatest().getOsVersion();
    @Getter private final SauceTimeout sauceTimeout = new SauceTimeout();

    public SauceOptions() {
        this(new MutableCapabilities());
    }

    public SauceOptions(Capabilities capabilities) {
        seleniumCapabilities = new MutableCapabilities(capabilities);
        if (capabilities.getCapability("browserName") != null) {
            browserName = (String) capabilities.getCapability("browserName");
        }
    }

    public MutableCapabilities toCapabilities() {
        seleniumCapabilities.setCapability(CapabilityType.BROWSER_NAME, browserName);
        seleniumCapabilities.setCapability(CapabilityType.PLATFORM_NAME, platformName);
        seleniumCapabilities.setCapability(CapabilityType.BROWSER_VERSION, browserVersion);
        seleniumCapabilities.setCapability("sauce:options", new HashMap<>());
        return seleniumCapabilities;
    }

    public SauceOptions withChrome() {
        browserName = BrowserType.CHROME;
        return this;
    }

    public SauceOptions withSafari() {
        return withMac(MacVersion.Mojave);
    }

    public SauceOptions withSafari(SafariVersion version) {
        browserName = BrowserType.SAFARI;
        browserVersion = version.getVersion();
        return this;
    }

    public SauceOptions withSafari(final String version) {
        String _version = version;
        if (_version.isEmpty()) {
            _version = "latest";
        }
        browserName = BrowserType.SAFARI;
        browserVersion = _version;
        return this;
    }

    public SauceOptions withLinux() {
        platformName = "Linux";
        return this;
    }

    public SauceOptions withWindows10() {
        platformName = "Windows 10";
        return this;
    }

    public SauceOptions withWindows8_1() {
        platformName = "Windows 8.1";
        return this;
    }

    public SauceOptions withWindows8() {
        platformName = "Windows 8";
        return this;
    }

    public SauceOptions withWindows7() {
        platformName = "Windows 7";
        return this;
    }

    public SauceOptions withEdge() {
        browserName = "Edge";
        browserVersion = "18.17763";
        return this;
    }

    //TODO notice the duplication below with edge.
    //Maybe could be moved to a separate class so we can do withEdge().16_16299();
    //Or withEdge().version(EdgeVersion.16_16299);
    public SauceOptions withEdge18() {
        withEdge();
        browserVersion = "18.17763";
        return this;
    }

    public SauceOptions withEdge17() {
        withEdge();
        browserVersion = "17.17134";
        return this;
    }

    public SauceOptions withEdge16() {
        withEdge();
        browserVersion = "16.16299";
        return this;
    }

    public SauceOptions withEdge15() {
        withEdge();
        browserVersion = "15.15063";
        return this;
    }

    public SauceOptions withEdge14() {
        withEdge();
        browserVersion = "14.14393";
        return this;
    }

    public SauceOptions withEdge13() {
        withEdge();
        browserVersion = "13.10586";
        return this;
    }

    public SauceOptions withFirefox() {
        browserName = "firefox";
        return this;
    }

    public SauceOptions withIE(IEVersion version) {
        this.browserVersion = version.getVersion();
        return this;
    }

    public SauceOptions withIE(String version) {
        browserName = "IE";
        browserVersion = version;
        return this;
    }

    public SauceOptions withIE() {
        browserName = "IE";
        browserVersion = "latest";
        return this;
    }

    public SauceOptions withMac(MacVersion macVersion) {
        platformName = macVersion.label;
        browserName = "Safari";
        return this;
    }
}

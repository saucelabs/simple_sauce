﻿using OpenQA.Selenium;

namespace Sauce.Bindings
{
    public interface ISauceRemoteDriver : IJavaScriptExecutor, IWebDriver
    {
        IWebDriver CreateRemoteWebDriver(DriverOptions options);

        IWebDriver CreateRemoteWebDriver(DataCenter dataCenter, DriverOptions options);
    }
}
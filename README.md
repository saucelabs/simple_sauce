# Sauce Bindings


[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0b21fa72ecaa4a3c92bf7ac9481f4d7d)](https://app.codacy.com/app/sauce_bindings?utm_source=github.com&utm_medium=referral&utm_content=saucelabs/sauce_bindings&utm_campaign=Badge_Grade_Dashboard)
[![Travis Status](https://travis-ci.org/saucelabs/sauce_bindings.svg?branch=master)](https://travis-ci.org/saucelabs/sauce_bindings)
[![codecov](https://codecov.io/gh/saucelabs/sauce_bindings/branch/master/graph/badge.svg)](https://codecov.io/gh/saucelabs/sauce_bindings)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/sauce_bindings/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/sauce_bindings.svg)](http://isitmaintained.com/project/saucelabs/sauce_bindings "Average time to resolve an issue")

## The Idea - Making Sauce Simple To Use

Writing and maintaining automated good test frameworks is hard work. Sauce Labs wants to help make this work simpler. We've created Sauce Bindings, a collection of tools to make connecting to and working with Sauce Labs simple.

Sauce Bindings has three main goals:

-   Providing test developers with a wrapper or _binding_ for each programming language commonly used with web and mobile testing,
-   Providing a concise API for connecting to Sauce Labs in test frameworks and making use of Sauce Labs features,
-   Providing an excellent developer user experience for using Sauce Labs in a straightforward, intuitive way.

The focus of this project is to make using Sauce Labs _simple_ so that test developers can focus on developing the best automated test frameworks possible for their teams.

## Supported Language Bindings

This project is a cross-language effort, with bindings available in the following languages:

-   [Java](https://github.com/saucelabs/sauce_bindings/tree/master/java),
-   [C#](https://github.com/saucelabs/sauce_bindings/tree/master/dotnet),
-   [Python](https://github.com/saucelabs/sauce_bindings/tree/master/python),
-   [Ruby](https://github.com/saucelabs/sauce_bindings/tree/master/ruby).

Each binding balances having a shared API and feature set while being idiomatic to the language and ecosystem of the binding. Features should be available in all language bindings. 

## Getting Started and Prerequisites

To get started using Sauce Bindings, install your preferred language binding(s) based on these language documentation:

-   [Java](https://github.com/saucelabs/sauce_bindings/tree/master/java/README.md),
-   [C#](https://github.com/saucelabs/sauce_bindings/tree/master/dotnet/README.md),
-   [Python](https://github.com/saucelabs/sauce_bindings/tree/master/python/README.rst),
-   [Ruby](https://github.com/saucelabs/sauce_bindings/tree/master/ruby/README.md).

For all bindings, the following is required:

-   A valid [Sauce Labs](https://app.saucelabs.com/login) account
-   Sauce Labs username and access key values set on the environment tests will be executing on as the following environment variables:

```bash
SAUCE_USERNAME='valid.username'
SAUCE_ACCESS_KEY='valid.key'
```

Here are instructions on how to set environment variables on [Windows 10](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/), [MacOS](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x) and [Linux](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables).

## Features and Style

Sauce Bindings should be a tool for both novice and experienced test developers. This means providing basic functionality such as being able to start a browser session on Sauce Labs with minimal code as well as creating Sauce Labs sessions [directly from W3C options](https://wiki.saucelabs.com/display/DOCS/W3C+Capabilities+Support).

Here's a pseudocode example of creating a browser session on Sauce Labs with Sauce Bindings:

```java
sauce = new SauceSession();

sauce.start();

sauce.driver.get("https://www.saucelabs.com")

sauce.stop();
```

This creates a new `sauce` object that uses reasonable defaults for browser options, starts a session on Sauce Labs, visits the Sauce Labs website then closes the browser session. This pseudocode sample idealizes the goals of Sauce Bindings: starting a session on Sauce with reasonable defaults in a few lines of code. It is simple, straightforward, readable and translates well across multiple programming languages. 

## Building and Installing

Currently each binding follows its own language-specific build process for building and installing each language binding.

-   [Java](https://github.com/saucelabs/sauce_bindings/tree/master/java/README.md#building),
-   [C#](https://github.com/saucelabs/sauce_bindings/tree/master/dotnet/README.md#migrating-to-simple-sauce),
-   [Python](https://github.com/saucelabs/sauce_bindings/tree/master/python/README.rst#installation),
-   [Ruby](https://github.com/saucelabs/sauce_bindings/tree/master/ruby#installation).

## Tests

Currently each binding has tests that can be executed in a language-specific way. 

-   [Java](https://github.com/saucelabs/sauce_bindings/tree/master/java/README.md#testing),
-   [C#](https://github.com/saucelabs/sauce_bindings/tree/master/dotnet/README.md),
-   [Python](https://github.com/saucelabs/sauce_bindings/tree/master/python/README.rst#testing),
-   [Ruby](https://github.com/saucelabs/sauce_bindings/tree/master/ruby#installation).


## Contributing

Sauce Labs is proudly based on open source technologies and encourages open source projects like Sauce Bindings. If you would like to contribute there are several ways of doing so:

-   **Development**: Bug fixes and implementing new features are welcome. There are also [good first issues](https://github.com/saucelabs/sauce_bindings/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labeled if you'd like to get started on development but don't know how. Please fork this this repository and open a pull request if you'd like to contribute this way.
-   **Features and Issues**: See something you'd like fixed? Have a good idea for how to improve Sauce Bindings? [Create an issue](https://github.com/saucelabs/sauce_bindings/issues) or add to an existing issue. 
-   **Documentation**: A great way to start working with any open source project is through improving documentation. You can add or edit doc strings, either in a pull request or directly from GitHub. You can edit a file in GitHub as long as you're signed in and create a pull request from those edits. 

## Special Thanks

Special thanks to Aaron Evans. Nikolay Advolodkin worked with him in the beginning through several working sessions to create the Alpha version of these bindings. Although Aaron has not contributed much code, he has been instrumental in laying the foundation for the Java bindings :)

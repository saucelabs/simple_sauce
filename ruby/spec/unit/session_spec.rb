# frozen_string_literal: true

require 'spec_helper'

module SauceBindings
  describe Session do
    let(:valid_response) do
      {status: 200,
       body: {value: {sessionId: '0', capabilities: Selenium::WebDriver::Remote::Capabilities.chrome}}.to_json,
       headers: {"content_type": 'application/json'}}
    end
    let(:default_capabilities) do
      {browserName: 'chrome',
       browserVersion: 'latest',
       platformName: 'Windows 10',
       'sauce:options': {build: 'TEMP BUILD: 11'}}
    end

    def expect_request
      se3 = {desiredCapabilities: default_capabilities,
             capabilities: {firstMatch: [default_capabilities]}}.to_json
      se4 = {capabilities: {alwaysMatch: default_capabilities}}.to_json

      body = Selenium::WebDriver::VERSION[0] == '3' ? se3 : se4

      endpoint ||= 'https://ondemand.us-west-1.saucelabs.com/wd/hub/session'
      stub_request(:post, endpoint).with(body: body).to_return(valid_response)
    end

    before do
      allow_any_instance_of(Selenium::WebDriver::Remote::Http::Default).to receive(:use_proxy?).and_return(false)
      allow(ENV).to receive(:[]).with('BUILD_TAG').and_return('')
      allow(ENV).to receive(:[]).with('BUILD_NAME').and_return('TEMP BUILD')
      allow(ENV).to receive(:[]).with('BUILD_NUMBER').and_return('11')
      allow(ENV).to receive(:[]).with('SAUCE_USERNAME').and_return('foo')
      allow(ENV).to receive(:[]).with('SAUCE_ACCESS_KEY').and_return('123')
    end

    describe '#new' do
      it 'creates default Options instance if none is provided' do
        session = Session.new

        expected_results = {url: 'https://foo:123@ondemand.us-west-1.saucelabs.com:443/wd/hub',
                            desired_capabilities: {'browserName' => 'chrome',
                                                   'browserVersion' => 'latest',
                                                   'platformName' => 'Windows 10',
                                                   'sauce:options' => {'build' => 'TEMP BUILD: 11'}}}
        expect(session.to_selenium).to eq expected_results
      end

      it 'uses provided Options class' do
        sauce_opts = Options.chrome(browser_version: '123',
                                    platform_name: 'Mac',
                                    idle_timeout: 4)
        session = Session.new(sauce_opts)

        expected_results = {url: 'https://foo:123@ondemand.us-west-1.saucelabs.com:443/wd/hub',
                            desired_capabilities: {'browserName' => 'chrome',
                                                   'browserVersion' => '123',
                                                   'platformName' => 'Mac',
                                                   'sauce:options' => {'idleTimeout' => 4,
                                                                       'build' => 'TEMP BUILD: 11'}}}
        expect(session.to_selenium).to eq expected_results
      end

      it 'defaults to US West data Center' do
        session = Session.new
        expect(session.data_center).to eq :US_WEST
      end

      it 'uses provided Data Center' do
        session = Session.new(data_center: :EU_CENTRAL)

        expected_results = {url: 'https://foo:123@ondemand.eu-central-1.saucelabs.com:443/wd/hub',
                            desired_capabilities: {'browserName' => 'chrome',
                                                   'browserVersion' => 'latest',
                                                   'platformName' => 'Windows 10',
                                                   'sauce:options' => {'build' => 'TEMP BUILD: 11'}}}
        expect(session.to_selenium).to eq expected_results
      end

      it 'uses provided Event Listener' do
        listener = instance_double(Selenium::WebDriver::Support::AbstractEventListener)
        session = Session.new(listener: listener)

        expect(session.to_selenium[:listener]).to eq listener
      end

      it 'uses provided HTTP Client' do
        http_client = instance_double(Selenium::WebDriver::Remote::Http::Default)
        session = Session.new(http_client: http_client)

        expect(session.to_selenium[:http_client]).to eq http_client
      end

      it 'raises exception if data center is invalid' do
        expect { Session.new(data_center: :FOO) }.to raise_exception(ArgumentError)
      end
    end

    describe '#start' do
      it 'starts the session and returns Selenium Driver instance' do
        expect_request

        driver = Session.new.start
        expect(driver).to be_a Selenium::WebDriver::Driver
      end

      it 'uses username and access key from ENV' do
        session = Session.new

        expect(session.url).to include('foo:123')
      end

      it 'raises exception if no username set' do
        allow(ENV).to receive(:[]).with('SAUCE_USERNAME')

        expect { Session.new.start }.to raise_exception(ArgumentError)
      end

      it 'raises exception if no access key set' do
        allow(ENV).to receive(:[]).with('SAUCE_ACCESS_KEY')

        expect { Session.new.start }.to raise_exception(ArgumentError)
      end
    end

    describe '#stop' do
      it 'quits the driver' do
        driver = instance_double(Selenium::WebDriver::Remote::Driver, session_id: '1234')
        allow(Selenium::WebDriver::Driver).to receive(:for).and_return(driver)
        allow(driver).to receive :quit
        allow(SauceWhisk::Jobs).to receive(:change_status).with('1234', true)

        session = Session.new
        session.start
        session.stop(true)

        expect(driver).to have_received(:quit)
        expect(SauceWhisk::Jobs).to have_received(:change_status).with('1234', true)
      end
    end

    describe '#data_center=' do
      it 'overrides default value for data center' do
        session = Session.new
        session.data_center = :US_EAST

        expect(session.url).to eq('https://foo:123@ondemand.us-east-1.saucelabs.com:443/wd/hub')
      end

      it 'raises exception if data center is invalid' do
        session = Session.new

        expect { session.data_center = :FOO }.to raise_exception(ArgumentError)
      end
    end

    describe '#http_client=' do
      it 'uses provided HTTP Client' do
        http_client = instance_double(Selenium::WebDriver::Remote::Http::Default)
        session = Session.new
        session.http_client = http_client

        expect(session.to_selenium[:http_client]).to eq http_client
      end
    end

    describe '#listner=' do
      it 'uses provided Event Listener' do
        listener = instance_double(Selenium::WebDriver::Support::AbstractEventListener)
        session = Session.new
        session.listener = listener

        expect(session.to_selenium[:listener]).to eq listener
      end
    end

    describe '#url=' do
      it 'allows user to override default URL' do
        session = Session.new
        session.url = 'https://bar:321@mycustomurl/foo/wd/hub:8080'

        expected_results = {url: 'https://bar:321@mycustomurl/foo/wd/hub:8080',
                            desired_capabilities: {'browserName' => 'chrome',
                                                   'browserVersion' => 'latest',
                                                   'platformName' => 'Windows 10',
                                                   'sauce:options' => {'build' => 'TEMP BUILD: 11'}}}
        expect(session.to_selenium).to eq expected_results
      end
    end
  end
end

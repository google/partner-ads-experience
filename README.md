# Partner Ads Experience (PAX)

## Introduction

Partner Ads Experience is a solution for third-party partner websites to integrate with Google Ads Performance Max campaign construction and management experience with low upfront cost and future maintenance burden. In this solution, third-party partner websites can easily call the launching API provided by PAX to download and render Google Ads UI which is built and maintained by Google.

PAX solution includes 2 components:

* PAX integrator: A javascript library served from [https://www.gstatic.com/pax/latest/pax_integrator.js](https://www.gstatic.com/pax/latest/pax_integrator.js) which provides the launching API.
* PAX SDK: The repository which provides TypeScript type information (d.ts) about PAX integrator. This SDK is required when you develop your app with Typescript. For javascript developers, this SDK is not required as part of your app library. But it is also useful to check the type declaration files during the integration development process.

## Terminology

### Launching API

The API provided by PAX to download and render Google Ads UI.

### Service

“Service” represents the interface for cross-app communication. PAX provides 2 types of service:

* Partner service: The 3P partner needs to implement these services which are called by Google Ads app. Google Ads app calls these services to get 3P partner information, notify the 3P partner and control 3P partner behavior.
* Ads service: The 3P partner can use these services provided by Google Ads app to get Ads information, notify Ads App and control Ads behavior.

## Directory

PAX SDK can be accessed under the **sdk/** directory in this NPM repository. The SDK directory structure is as follows:


| Directory/file               | Description                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------|
| `sdk/integrator.d.ts`        | The integrator launch API called by the partner app to launch PAX                             |
| `sdk/config`                 | Configuration required by PAX to launch the Ads app                                           |
| `sdk/required_services.d.ts` | Wrapper interface for all the services to communicate between the Ads app and the partner app |
| `sdk/services`               | Services provided by the Ads app and called by the partner app                                |
| `sdk/services/ads`           | Services provided by the partner app and called by the Ads app                                |
| `sdk/services/partner`       | Shared interfaces which are referenced by both partner and Ads provider service interfaces    |

## Prerequisite

Before starting to integrate with PAX, Google OAuth 2.0 ([Link](https://developers.google.com/identity/protocols/oauth2)) setup is required. To access PAX, scopes ‘https://www.googleapis.com/auth/adwords’ and ‘https://www.googleapis.com/auth/supportcontent’ are needed.

## Quick start

An example is included in this section for a quick start. Please refer to the source code for a full interface description.
In your html, define where Google Ads UI should be inserted. And tag the container with an id. Example:

```
<div id="google-ads-pax-container"></div>
```
Then in your JavaScript (please make necessary changes based on your techstack), integrate with PAX API:

### Set up PAX config

```js
let paxConfig = {
  authAccess: {
    oauthTokenAccess: {
      token: {access token you obtained from Google authorization server},
    }
  },
  clientConfig: {
    // contentContainer selector. It will eventually be queried with document.querySelector
    contentContainer: {selector of Google Ads UI container, or #google-ads-pax-container in the example above}",
  },
};
```

### Set up PAX services

Depending on your ability to set up conversion tracking, use one of the two
examples provided below.

#### Example if you can set up conversion tracking:

```js
let paxServices = {
  authenticationService: {
    get: function(request) {
      return Promise.resolve({
        accessToken: accessToken
      });
    },
    fix: function(request) {
      // Refreshes access token. And returns only after PAX can retry token
      // fetching.
      return Promise.resolve({
        retryReady: true
      });
    },
  },
  businessService: {
    getBusinessInfo: function(request) {
      return Promise.resolve({
        businessName: {The user website business name}
        businessUrl: {The user website}
      });
    },
    fixBusinessInfo: function(request) {
      // Fixes business info issues.
      // Returns trun when successfully get the business name and url.
      return Promise.resolve({
        retryReady: true
      });
    },
  },
  conversionTrackingService: {
    getSupportedConversionTrackingTypes: function(request) {
      return Promise.resolve({
        conversionTrackingTypes: ['TYPE_CONVERSION_EVENT']
      });
    },
    getSupportedConversionLabels: function(request) {
      return Promise.resolve({
        // Returns a non-empty list of conversion labels which apply to this
        // website.
        conversionLabels: ['purchase']
      });
    },
  },
  termsAndConditionsService: {
    notify: function(request) {
      // Checks the request.isAccepted and handle correspondingly.
      // For example after the user accepts TOS, the CMS partner could install
      // conversion tracking id and snippet into the user website.
      if (request.isAccepted) {
        // Get conversion tracking id (example below) and set up conversion
        // tracking
      }
      return Promise.resolve({});
    },
  },
  accountStatusService: {
    disconnect: function(request) {
      // Deletes conversion tracking tags from the user website.
      // Removes stored authentication information (e.g. access token) from
      // your database.
      return Promise.resolve({});
    },
  },
  // Campaign service which is optional to set
  campaignService: {
    notifyNewCampaignCreated: function(request) {
      // Read the campaignId
      let campaignId = request.campaignId;

      // Use campaignId or store it for future use.

      return Promise.resolve({});
    }
  }
  // Other optional services implementation based on use case. You could check
  // more details from the SDK.
  // Please make sure each service implementation needs to return the response.
};
```
#### Example if you CANNOT set up conversion tracking

```js
let paxServices = {
  authenticationService: {
    get: function(request) {
      return Promise.resolve({
        accessToken: accessToken
      )};
    },
    fix: function(request) {
      // Refreshes access token. And returns only after PAX can retry token
      // fetching.
      return Promise.resolve({
        retryReady: true
      });
    },
  },
  conversionTrackingService: {
    getSupportedConversionTrackingTypes: function(request) {
      return Promise.resolve({});
    },
  },
  // Campaign service which is optional to set
  campaignService: {
    notifyNewCampaignCreated: function(request) {
      // Read the campaignId
      let campaignId = request.campaignId;

      // Use campaignId or store it for future use.

      return Promise.resolve({});
    }
  }
  // Other optional services implementation based on use case. You could
  // check more details from the SDK.
  // Please make sure each service implementation needs to return the response.
};
```

### Launch Google Ads with PAX integrator

```js
// Insert PAX integrator
let sc = document.createElement('script');
sc.src = 'https://www.gstatic.com/pax/latest/pax_integrator.js';
document.body.append(sc);

// Call launching API.
const adsAppHandler = await google.ads.integration.integrator.launchGoogleAds(paxConfig, paxServices);

// The following example shows how to call Ads service. Please refer to source code for other services.
const adsSupportedServices = adsAppHandler.getServices();
const ctService = adsSupportedServices.conversionTrackingService;
const conversionTrackingId = (await ctService.getConversionTrackingId({})).conversionTrackingId;
const accountService = adsAppHandler.getServices();
const customerId = (await accountService.getAccountId({})).customerId;
```

## Contributing guidelines

Currently the GitHub repository is owned by Google Partner Ads Experience dev
team. If you find any bugs, please report to:
[Google group](https://groups.google.com/g/embedding-google-ads-with-jimdo-dev).

## Other resources
* TBD: to be published

## License
```
Copyright 2023 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

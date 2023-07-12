# Partner Ads Experience (PAX) API

This Repository contains all of the interfaces needed to integrate with
Google Partner Ads experience.

This SDK is required when you develop your app with Typescript. For javascript
developer, this SDK is not required as part of your app library. But it is also
useful to check the type declaration files during integration developing
process.

| Directory/file               | Description                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| `sdk/integrator.d.ts`        | The Ads app integrator entry point                                                      |
| `sdk/config`                 | Configuration required by the Ads app to launch the partner ads experience              |
| `sdk/required_services.d.ts` | Wrapper interface for all the communication required services                           |
| `sdk/services`               | All service interfaces required to communicate between the partner app and the Ads app  |
| `sdk/services/ads`           | Services provided by the Ads app and called by the partner                              |
| `sdk/services/partner`       | Services provided by the partner and called by the Ads app                              |

## Quick start

**Note:** The following code assumes that you develop with Javascript.

### Config setup
```js
let paxConfig = {
  authAccess: {
    oauthTokenAccess: {
      token: ${token},
    }
  },
  locale: ${locale},
  clientConfig: {
    contentContainer: ${ads_container_element_id},
  },
};
```
To add debugging config, set:
```js
let paxConfig = {
  authAccess: {
    oauthTokenAccess: {
      token: ${token},
    }
  },
  locale: ${locale},
  clientConfig: {
    contentContainer: ${ads_container_element_id},
  },
  debuggingConfig: {
    env: 'QA_PROD'
  },
};
```

### Ads required services setup
Ads required services play the key role to communicate between the Ads app and
the partner app during the Ads app running time.

#### OAuth data

```js
let authInfoService = {
  get: ${get_access_info_impl},
  fix: ${fix_access_info_impl},
};
```

#### Conversion tracking

```js
let conversionTrackingService = {
  getSupportedConversionLabels: ${get_supported_conversion_labels_impl},
};
```

#### Business info

```js
let businessService = {
  getBusinessInfo: ${get_business_info_impl},
  fixBusinessInfo: ${fix_business_info_impl},
};
```

#### Terms and conditions

```js
let termsAndConditionsService = {
  notify: ${notify_impl},
};
```

### Wrap all Ads app required services

```js
let paxServices = {
  authenticationService: authInfoService,
  businessService: businessService,
  conversionTrackingService: conversionTrackingService,
  termsAndConditionsService: termsAndConditionsService,
};
```

### Launch with the integrator

```js
// Insert the script with integrator js file from Google gstatic.com.
let sc = document.createElement('script');
sc.src = 'https://www.gstatic.com/pax/${version}/pax_integrator.js';
document.body.append(sc);

// Create an element to launch the Ads app.
let rootContainer = document.getElementById(${root_element_id});
let adsContainer = document.createElement('div');
adsContainer.id = ${ads_container_element_id};
rootContainer.appendChild(adsContainer);

// Call launch api
google.ads.integration.integrator.launchGoogleAds(paxConfig, paxServices);
```

### Get services supported by the Ads app

```js
const adsAppHandler = await google.ads.integration.integrator.launchGoogleAds(paxConfig, paxServices);
const adsSupportedServices = adsAppHandler.getServices();
```

#### Get conversion tracking id from the Ads app

```js
const ctService = adsSupportedServices.conversionTrackingService;
const conversionTrackingId = (await ctService.getConversionTrackingId(${get_conversion_tracking_id_request})).conversionTrackingId;
```

#### Get terms and conditions state from the Ads app

```js
const accountService = adsSupportedServices.accountService;
const termsAndServicesIsAccepted = (await
accountService.getTermsAndConditionsState(${get_terms_and_conditions_state_request})).isAccepted;
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

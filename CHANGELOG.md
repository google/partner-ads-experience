## Version 1.0.10
* Fix minor bugs

## Version 1.0.9
* Fix ad blocker detector bug on integrator

## Version 1.0.8
* Add user action required services

## Version 1.0.7
* Fix minor bugs

## Version 1.0.5
* Fix bug so that when the "Create new account" button is clicked, the embedded app's business name step is shown.

## Version 1.0.4
* Add PartnerDateRangeService and AdsDateRangeService

## Version 1.0.2
* Fix bugs on integrator

## Version 1.0.1
* Support PAX mini-dashboard rendering.
* Add some required services like page view conversion setting and date range
  service.

## Version 1.0.0
* Publish the first GA version of PAX.

## Version 0.2.10
* Fix locale/language that is used to load Google Ads within Jimdo. The language that is set in Jimdo should be the same language that is used for Google Ads.
  
## Version 0.2.9
* Add AccountService.disconnect service.
* Fix integrator debugging config setup bug.

## Version 0.2.8
* Add ConversionTrackingService.getPageViewConversionSetting service
* Update AccountService.GetAccountId API which is provide more info in
  GetAccountIdResponse.
* Integrator change to support linking campaigns with website context.

## Version 0.2.7
* Add getAccountId service as part of AccountService.

## Version 0.2.6
* Add accountStatusService as part of adsSupportedServices.

## Version 0.2.5
* Changed integrator to support two step authentication.

## Version 0.2.4
* Changed integrator to support existing ads account detection.

## Version 0.2.3
* Changed integrator to support adblock detection.

## Version 0.2.2
* Changed integrator to support to create a new ads account for the users who have existing ads accounts.

## Version 0.2.1
* Added license header for newly added files.

## Version 0.2.0
* Added accountService as part of SupportedServicesFromAds interface.
* Provided default fix service implementations to avoid the failures when fix services are not provided.

## Version 0.1.0
* Initial version of PAX.
* Add accountStatusService as part of adsSupportedServices.

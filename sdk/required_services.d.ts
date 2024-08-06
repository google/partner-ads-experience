/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {google as adsAccount} from 'service/ads/account-service';
import {google as adsDateRange} from 'service/ads/ads-date-range-service';
import {google as adsConversionTracking} from 'service/ads/conversion-tracking-service';
import {google as accountStatus} from 'service/partner/account_status/account-status-service';
import {google as authentication} from 'service/partner/authentication/authentication-service';
import {google as business} from 'service/partner/business/business-service';
import {google as campaign} from 'service/partner/campaign/campaign-service';
import {google as partnerConversionTracking} from 'service/partner/conversion_tracking/conversion-tracking-service';
import {google as partnerDateRange} from 'service/partner/partner_date_range/partner-date-range-service';
import {google as partnerTermsAndConditions} from 'service/partner/terms_and_conditions/terms-and-conditions-service';
import {google as userAction} from 'service/partner/user_action/user-action-service';
/**
 * Namespace for all the services to communicate between the Ads app and the
 * partner app.
 */
export declare namespace google.ads.integration.service {
  /**
   * The collection of services required by the Ads app.
   */
  export interface RequiredServicesByAds {
    authenticationService?:
        authentication.ads.integration.service.partner.AuthenticationService;

    businessService?: business.ads.integration.service.partner.BusinessService;

    conversionTrackingService?: partnerConversionTracking.ads.integration
        .service.partner.ConversionTrackingService;

    termsAndConditionsService?: partnerTermsAndConditions.ads.integration
        .service.partner.TermsAndConditionsService;

    accountStatusService?:
        accountStatus.ads.integration.service.partner.AccountStatusService;

    campaignService?: campaign.ads.integration.service.partner.CampaignService;

    partnerDateRangeService?: partnerDateRange.ads.integration.service.partner
        .PartnerDateRangeService;

    userActionService?:
        userAction.ads.integration.service.partner.UserActionService;
  }

  /**
   * The collection of services provided by the Ads app and can be called
   * by the partner.
   */
  export interface SupportedServicesFromAds {
    conversionTrackingIdService?: adsConversionTracking.ads.integration.service
        .ads.ConversionTrackingIdService;
    accountService?: adsAccount.ads.integration.service.ads.AccountService;
    adsDateRangeService?:
        adsDateRange.ads.integration.service.ads.AdsDateRangeService;
  }
}

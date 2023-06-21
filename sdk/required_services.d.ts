/**
 * Copyright 2023 Google LLC
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
import {google as adsConversionTracking} from 'service/ads/conversion-tracking-service';
import {google as authentication} from 'service/partner/authentication-service';
import {google as business} from 'service/partner/business-service';
import {google as partnerConversionTracking} from 'service/partner/conversion-tracking-service';
import {google as termsAndConditions} from 'service/partner/terms-and-conditions-service';

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

    termsAndConditionsService?: termsAndConditions.ads.integration.service
        .partner.TermsAndConditionsService;
  }

  /**
   * The collection of services provided by the Ads app and can be called
   * by the partner.
   */
  export interface SupportedServicesFromAds {
    conversionTrackingIdService?: adsConversionTracking.ads.integration.service
        .ads.ConversionTrackingIdService;
  }
}
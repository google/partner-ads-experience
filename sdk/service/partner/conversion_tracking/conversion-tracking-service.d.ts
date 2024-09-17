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


export declare namespace google.ads.integration.service.partner {
  export interface GetConversionLabelsRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface GetConversionLabelsResponse {
    /**
     * The list of conversion goal labels supported by the partner. At least one
     * label is required.
     *
     * The list of conversion goal labels would be pre-defined
     * between Google Ads and the partner.
     * The full list of conversion goal labels are:
     * - purchase
     * - subscribe
     * - add_to_cart
     * - begin_checkout
     * - book_appointment
     * - contact
     * - request_quote
     * - get_directions
     * - submit_lead_form
     * - sign_up
     *
     */
    conversionLabels?: Array<string>;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface GetPageViewConversionSettingRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface GetPageViewConversionSettingResponse {
    /**
     * A list of website pages under the 3P user website domain.
     */
    websitePages?: Array<google.ads.integration.service.partner.WebsitePage>;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface GetSupportedConversionTrackingTypesRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface GetSupportedConversionTrackingTypesResponse {
    /**
     * A list of conversion tracking types 3P supports. At least one type is
     * required.
     */
    conversionTrackingTypes?:
        Array<google.ads.integration.service.partner.ConversionTrackingType>;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface WebsitePage {
    /**
     * The title of the website page.
     */
    title?: string;
    /**
     * The path of the website page.
     */
    path?: string;
  }
}

export declare namespace google.ads.integration.service.partner {
  /**
   * Supported conversion tracking goal types.
   *
   * - TYPE_UNKNOWN:
   * - TYPE_CONVERSION_EVENT:
   *   Conversion goal type which is usually linked to a CTA.If this type is
   * supported by 3P, 3P needs to pass PAX with a list of supported conversion
   * labels through ConversionTrackingService.GetSupportedConversionLabels
   * - TYPE_PAGE_VIEW:
   *   Conversion goal type which is linked to website page view action.If this
   * type is supported by 3P, 3P needs to pass PAX with a list of website pages
   * through ConversionTrackingService.GetPageViewConversionSetting
   */
  export type ConversionTrackingType =
      |'TYPE_UNKNOWN'|'TYPE_CONVERSION_EVENT'|'TYPE_PAGE_VIEW';
}

export declare namespace google.ads.integration.service.partner {
  /**
   * Service called by the Ads app to power conversion
   * tracking setup.
   *
   * This service is provided by the partner.
   */
  export interface ConversionTrackingService {
    /**
     * Gets a list of supported conversion goal labels supported by
     * the partner.
     */
    getSupportedConversionLabels(request: google.ads.integration.service.partner
                                     .GetConversionLabelsRequest):
        Promise<
            google.ads.integration.service.partner.GetConversionLabelsResponse>;
    /**
     * Gets the page view conversion setting.
     */
    getPageViewConversionSetting(request: google.ads.integration.service.partner
                                     .GetPageViewConversionSettingRequest):
        Promise<google.ads.integration.service.partner
                    .GetPageViewConversionSettingResponse>;
    /**
     * Gets the list of conversion tracking types that 3P supports.
     */
    getSupportedConversionTrackingTypes(
        request: google.ads.integration.service.partner
            .GetSupportedConversionTrackingTypesRequest):
        Promise<google.ads.integration.service.partner
                    .GetSupportedConversionTrackingTypesResponse>;
  }
}

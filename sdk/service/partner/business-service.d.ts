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


export declare namespace google.ads.integration.service.partner {
  export interface GetBusinessInfoRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface GetBusinessInfoResponse {
    businessName?: string;
    businessUrl?: string;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface FixBusinessInfoRequest {
    /**
     * Error severity for partner to make decisions.
     */
    errorSeverity?: google.ads.integration.service.partner.ErrorSeverity;
    /**
     * Business info specific error type for partner to understand
     * the error.
     */
    errorType?: google.ads.integration.service.partner.BusinessInfoErrorType;
    /**
     * Detailed error message for partner to log.
     */
    errorMessage?: string;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface FixBusinessInfoResponse {
    /**
     * Whether or not the partner is ready for Ads app to do a retry.
     */
    retryReady?: boolean;
  }
}

export declare namespace google.ads.integration.service.partner {
  /**
   * Generic error severity type for all xchannel error fixing
   * methods.
   *
   * - UNSPECIFIED:
   * - FATAL:
   *   This enum value means the error will prevent Ads App from
   *   rendering.
   * - WARNING:
   *   This enum value means the error will not prevent Ads App
   *   from rendering.
   */
  export type ErrorSeverity =|'UNSPECIFIED'|'FATAL'|'WARNING';
}
export declare namespace google.ads.integration.service.partner {
  /**
   * Business info specific error type.
   *
   * - URL_UNKNOWN_ERROR:
   *   Business url has unknown errors.
   * - URL_SYNTAX_ERROR:
   *   Business url could be empty, exceeding maximum allowable
   *   length(512), or syntactically invalid including missing
   *   'http' or 'https' scheme.
   * - URL_UNREACHABLE:
   *   Business url is unreachable because it is not found,
   *   unauthenticated, has too many redirects or a bad redirect.
   * - URL_INELIGIBLE:
   *   Business url is blocklisted by Google Ads to advertise.
   */
  export type BusinessInfoErrorType =|'URL_UNKNOWN_ERROR'|'URL_SYNTAX_ERROR'|
      'URL_UNREACHABLE'|'URL_INELIGIBLE';
}

export declare namespace google.ads.integration.service.partner {
  /**
   * Service called by the Ads app to get business info from
   * the partner.
   */
  export interface BusinessService {
    /**
     * Gets business info to be used in ads campaign construction.
     */
    getBusinessInfo(
        request: google.ads.integration.service.partner.GetBusinessInfoRequest):
        Promise<google.ads.integration.service.partner.GetBusinessInfoResponse>;
    /**
     * Fix the invalid business info fields that Ads app got from
     * the partner.
     */
    fixBusinessInfo(
        request: google.ads.integration.service.partner.FixBusinessInfoRequest):
        Promise<google.ads.integration.service.partner.FixBusinessInfoResponse>;
  }
}

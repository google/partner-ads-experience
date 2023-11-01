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
  export interface GetRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface GetResponse {
    /**
     * The Google OAuth 2.0 Access token.
     *
     * The access token would be valid and have no 'Bearer ' as prefix.
     */
    accessToken?: string;
    /**
     * The current authenticated user returned from oauth response.
     */
    authUser?: string;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface FixRequest {
    /**
     * Error severity for partner to make decisions.
     */
    errorSeverity?: google.ads.integration.service.partner.ErrorSeverity;
    /**
     * Authentication specific error type for partner to understand
     * the error.
     */
    errorType?: google.ads.integration.service.partner.AuthenticationErrorType;
    /**
     * Detailed error message for partner to log.
     */
    errorMessage?: string;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface FixResponse {
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
   * Authentication specific error type.
   *
   * - AUTH_UNKNOWN_ERROR:
   *   Authentication has unknown errors.
   * - AUTH_TOKEN_EXPIRED:
   *   Access token expired.
   */
  export type AuthenticationErrorType =
      |'AUTH_UNKNOWN_ERROR'|'AUTH_TOKEN_EXPIRED';
}

export declare namespace google.ads.integration.service.partner {
  /**
   * Service called by the Ads app to do authentication.
   *
   * This service is provided by the partner.
   */
  export interface AuthenticationService {
    /**
     * Gets OAuth access token and authenticated user index to do
     * authentication.
     *
     * The OAuth access token would be expired after a given period
     * of time. (e.g. one hour). This method would be called by the
     * Ads app when the current access token is expired.
     */
    get(request: google.ads.integration.service.partner.GetRequest):
        Promise<google.ads.integration.service.partner.GetResponse>;
    /**
     * Fix the invalid authentication fields that Ads app got from
     * the partner.
     */
    fix(request: google.ads.integration.service.partner.FixRequest):
        Promise<google.ads.integration.service.partner.FixResponse>;
  }
}

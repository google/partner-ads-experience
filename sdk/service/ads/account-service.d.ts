/**
 * Copyright 2025 Google LLC
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


export declare namespace google.ads.integration.service.ads {
  export interface GetTermsAndConditionsStateRequest {}
}
export declare namespace google.ads.integration.service.ads {
  export interface GetTermsAndConditionsStateResponse {
    /**
     * Whether the user has accepted the ads terms and conditions.
     */
    isAccepted: boolean;
  }
}
export declare namespace google.ads.integration.service.ads {
  export interface GetAccountIdRequest {}
}
export declare namespace google.ads.integration.service.ads {
  export interface GetAccountIdResponse {
    /**
     * The external customer id of the ads customer.
     */
    externalCustomerId: number;
    /**
     * The formatted external customer id of the ads customer.
     */
    formattedExternalCustomerId: string;
  }
}
export declare namespace google.ads.integration.service.ads {
  export interface DisconnectRequest {}
}
export declare namespace google.ads.integration.service.ads {
  export interface DisconnectResponse {
    /**
     * Whether the ads customer has been disconnected.
     */
    isSuccess: boolean;
  }
}


export declare namespace google.ads.integration.service.ads {
  /**
   * Service called by the partner to get info related with the
   * ads customer account.
   */
  export interface AccountService {
    /**
     * Gets whether the user has accepted the terms and conditions.
     */
    getTermsAndConditionsState(
        request: google.ads.integration.service.ads
            .GetTermsAndConditionsStateRequest):
        Promise<google.ads.integration.service.ads
                    .GetTermsAndConditionsStateResponse>;
    /**
     * Gets the account id of the ads customer.
     */
    getAccountId(
        request: google.ads.integration.service.ads.GetAccountIdRequest):
        Promise<google.ads.integration.service.ads.GetAccountIdResponse>;
    /**
     * Disconnects the ads customer.
     */
    disconnect(request: google.ads.integration.service.ads.DisconnectRequest):
        Promise<google.ads.integration.service.ads.DisconnectResponse>;
  }
}

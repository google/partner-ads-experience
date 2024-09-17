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
  export interface DisconnectRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface DisconnectResponse {}
}


export declare namespace google.ads.integration.service.partner {
  /**
   * Service called by the Ads app to notify partner that the
   * user wants to disconnect their Google Ads account.
   */
  export interface AccountStatusService {
    /**
     * Notify partner that the user wants to disconnect their
     * Google Ads account. Upon called, partner should clear refresh token
     * storage, remove conversion tracking code snippets, and maybe re-initiate
     * user login process.
     */
    disconnect(request:
                   google.ads.integration.service.partner.DisconnectRequest):
        Promise<google.ads.integration.service.partner.DisconnectResponse>;
  }
}

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


export declare namespace google.ads.integration.service.partner {
  export interface FinishAndCloseSignUpFlowRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface FinishAndCloseSignUpFlowResponse {}
}


export declare namespace google.ads.integration.service.partner {
  /**
   * Service called by the Ads app to notify PAX user actions.
   */
  export interface UserActionService {
    /**
     * User finishes and closes the sign up flow in the PAX experience when
     * DISPLAY_MODE_SIGNUP_FLOW is specified in
     * Config.contentConfig.partnerAdsExperienceConfig.displayMode.
     */
    finishAndCloseSignUpFlow(
        request: google.ads.integration.service.partner
            .FinishAndCloseSignUpFlowRequest):
        Promise<google.ads.integration.service.partner
                    .FinishAndCloseSignUpFlowResponse>;
  }
}

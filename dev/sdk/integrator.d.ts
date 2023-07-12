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

import {google as googleConfig} from 'config/config';

import {google as googleService} from './required_services';

/**
 * Namespace for Google Ads integration.
 */
export declare namespace google.ads.integration {
  /**
   * The main integrator to be called by the partner to launch Google Ads.
   */
  export interface Integrator {
    /**
     * Launch Googe Ads.
     *
     * @param config Config required to launch Google Ads app.
     * @param services Services provided by partner which are required to
     *                 launch Google ads app.
     *
     * @return Promise<AdsApp>.
     */
    launchGoogleAds(
        config?: googleConfig.ads.integration.Config,
        services?: googleService.ads.integration.service.RequiredServicesByAds):
        Promise<AdsApp>;
  }

  /**
   * The global singleton integrator instance to launch Google Ads app.
   */
  let integrator: Integrator;

  /**
   * Google Ads app handler used by the partner.
   *
   * This interface provides some methods to be called by the partner after
   * the Ads app is launched.
   */
  export interface AdsApp {
    /**
     * Returns all the services provided by the Ads app to support the
     * communications during Ads app running phase.
     */
    getServices():
        googleService.ads.integration.service.SupportedServicesFromAds;
  }
}

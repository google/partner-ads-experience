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


export declare namespace google.ads.integration {
  /**
   * Auth access config to launch the Ads app.
   */
  export interface AuthAccess {
    oauthTokenAccess?: google.ads.integration.OAuthTokenAccess;
  }
}
export declare namespace google.ads.integration {
  export interface OAuthTokenAccess {
    /**
     * Access token string generated by Google OAuth 2.0.
     */
    token: string;
  }
}
export declare namespace google.ads.integration {
  /**
   * PAX UI customization config. Google Ads app follows Material Design 2
   * style. Please refer https://m2.material.io/for more details.
   *
   *
   */
  export interface UiCustomizationConfig {
    /**
     * General customization config for the Ads app.
     */
    generalCustomization: google.ads.integration.GeneralCustomizationConfig;
  }
}
export declare namespace google.ads.integration {
  /**
   * General customization config for the Ads app.This config includes the
   * customization applied across the Ads app.
   */
  export interface GeneralCustomizationConfig {
    /**
     * Theme colour customization config for the Ads app.
     */
    themeColourCustomization:
        google.ads.integration.ThemeColourCustomizationConfig;
  }
}
export declare namespace google.ads.integration {
  /**
   * Theme colour customization config for the Ads app, e.g. primary colour,
   * error colour.
   *
   * Please refer
   * https://m2.material.io/design/color/the-color-system.html#color-theme-creation
   * for more details about theme colour definition.
   */
  export interface ThemeColourCustomizationConfig {
    /**
     * Primary colour customization of the Ads app.The value should be HEX color
     * code in the format of #RRGGBB.
     */
    primaryColour: string;
  }
}
export declare namespace google.ads.integration {
  /**
   * Ads config to launch the Ads app.
   */
  export interface AdsConfig {
    /**
     * Partner Ads Experience config to launch the Ads App.
     */
    partnerAdsExperienceConfig?:
        google.ads.integration.PartnerAdsExperienceConfig;
  }
}
export declare namespace google.ads.integration {
  /**
   * Partner Ads Experience config to launch the Ads App.
   */
  export interface PartnerAdsExperienceConfig {
    /**
     * The campaign reporting style of the partner ads experience. By default,
     * it is full reporting style.
     */
    reportingStyle?: google.ads.integration.ReportingStyle;
    /**
     * The display mode of the partner ads experience. By default, it is full
     * display mode.
     */
    displayMode?: google.ads.integration.DisplayMode;
  }
}
export declare namespace google.ads.integration {
  /**
   * Debugging Config to launch the Ads app.
   */
  export interface DebuggingConfig {
    /**
     * Environment setup to launch the Ads app. Currently we support
     * environments: 'PROD' and 'QA_PROD'. By default, it is 'PROD'.
     */
    env?: google.ads.integration.Environment;
  }
}
export declare namespace google.ads.integration {
  /**
   * Config required to launch the Ads app.
   */
  export interface Config {
    authAccess: google.ads.integration.AuthAccess;
    /**
     * The configuration for Ads app.
     */
    contentConfig?: google.ads.integration.AdsConfig;
    clientConfig: google.ads.integration.ClientConfig;
    /**
     * The ISO language code of Google Ads app, e.g. 'de' for Germany.
     */
    locale?: string;
    /**
     * Debugging config to launch the Ads app.
     */
    debuggingConfig?: google.ads.integration.DebuggingConfig;
  }
}
export declare namespace google.ads.integration {
  /**
   * Client config required to launch the Ads app.
   */
  export interface ClientConfig {
    /**
     * The container element selector to launch the Ads app. Example:
     * #ads-app-container
     */
    contentContainer: string;
    /**
     * The UI customization config for the Ads app.
     */
    uiCustomizationConfig?: google.ads.integration.UiCustomizationConfig;
  }
}

export declare namespace google.ads.integration {
  /**
   * Partner Ads Experience campaign reporting style.
   *
   * - REPORTING_STYLE_FULL:
   *   Full campaign reporting dashboard.
   * - REPORTING_STYLE_MINI:
   *   Mini campaign reporting dashboard.
   */
  export type ReportingStyle =|'REPORTING_STYLE_FULL'|'REPORTING_STYLE_MINI';
}
export declare namespace google.ads.integration {
  /**
   * Partner Ads Experience display mode.
   *
   * - DISPLAY_MODEL_FULL:
   *   Full display mode including campaign signup flow and reporting dashboard.
   * - DISPLAY_MODE_SIGNUP_FLOW:
   *   Signup flow only, no reporting dashboard will be shown in this mode.
   */
  export type DisplayMode =|'DISPLAY_MODEL_FULL'|'DISPLAY_MODE_SIGNUP_FLOW';
}
export declare namespace google.ads.integration {
  /**
   * Environment choices to launch the Ads App.
   *
   * - PROD:
   * - QA_PROD:
   */
  export type Environment =|'PROD'|'QA_PROD';
}

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


export declare namespace google.ads.integration.service.shared {
  export interface Date {
    /**
     * Year of the date, e.g., 2014, 1990.
     */
    year?: number;
    /**
     * 1-based month of the date, e.g., 1, 12.
     */
    month?: number;
    /**
     * 1-based day of the date, e.g., 1, 31.
     */
    day?: number;
  }
}
export declare namespace google.ads.integration.service.partner {
  export interface GetSelectedDateRangeRequest {}
}
export declare namespace google.ads.integration.service.partner {
  export interface GetSelectedDateRangeResponse {
    /**
     * The start date of the date range.
     */
    startDate?: google.ads.integration.service.shared.Date;
    /**
     * The end date of the date range.
     */
    endDate?: google.ads.integration.service.shared.Date;
  }
}


export declare namespace google.ads.integration.service.partner {
  /**
   * Service called by the Ads app for date range related info.
   */
  export interface PartnerDateRangeService {
    /**
     * Get the selected date range from partner.
     */
    get(request:
            google.ads.integration.service.partner.GetSelectedDateRangeRequest):
        Promise<google.ads.integration.service.partner
                    .GetSelectedDateRangeResponse>;
  }
}

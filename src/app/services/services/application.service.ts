/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApplicationResponse } from '../models/application-response';
import { downloadCv } from '../fn/application/download-cv';
import { DownloadCv$Params } from '../fn/application/download-cv';
import { findAllApplicationByCandidate } from '../fn/application/find-all-application-by-candidate';
import { FindAllApplicationByCandidate$Params } from '../fn/application/find-all-application-by-candidate';
import { findApplicationsByPosition } from '../fn/application/find-applications-by-position';
import { FindApplicationsByPosition$Params } from '../fn/application/find-applications-by-position';
import { saveApplication } from '../fn/application/save-application';
import { SaveApplication$Params } from '../fn/application/save-application';
import { updateApplicationStatus } from '../fn/application/update-application-status';
import { UpdateApplicationStatus$Params } from '../fn/application/update-application-status';

@Injectable({ providedIn: 'root' })
export class ApplicationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveApplication()` */
  static readonly SaveApplicationPath = '/applications/cv/{position-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveApplication()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  saveApplication$Response(params: SaveApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveApplication$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  saveApplication(params: SaveApplication$Params, context?: HttpContext): Observable<number> {
    return this.saveApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateApplicationStatus()` */
  static readonly UpdateApplicationStatusPath = '/applications/updateStatus/{applicationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApplicationStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApplicationStatus$Response(params: UpdateApplicationStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateApplicationStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateApplicationStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApplicationStatus(params: UpdateApplicationStatus$Params, context?: HttpContext): Observable<void> {
    return this.updateApplicationStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `downloadCv()` */
  static readonly DownloadCvPath = '/applications/{id}/download';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadCv()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadCv$Response(params: DownloadCv$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return this.http.get(`${this.rootUrl}/applications/${params.id}/download`, {
      responseType: 'blob',   // Set the response type to 'blob'
      observe: 'response',    // Return the full HTTP response
      context: context || new HttpContext()
    }).pipe(
      map((response: HttpResponse<Blob>): StrictHttpResponse<Blob> => {
        if (response.body === null) {
          throw new Error('Response body is null');
        }
        return {
          ...response,  // Spread the response object to match StrictHttpResponse type
          body: response.body as Blob // Ensure body is not null
        } as StrictHttpResponse<Blob>;
      })
    );
  }
  

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downloadCv$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadCv(params: DownloadCv$Params, context?: HttpContext): Observable<Blob> {
    return this.downloadCv$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)  // Just return the Blob
    );
  }

  /** Path part for operation `findAllApplicationByCandidate()` */
  static readonly FindAllApplicationByCandidatePath = '/applications/candidateApp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllApplicationByCandidate()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllApplicationByCandidate$Response(params?: FindAllApplicationByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationResponse>>> {
    return findAllApplicationByCandidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllApplicationByCandidate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllApplicationByCandidate(params?: FindAllApplicationByCandidate$Params, context?: HttpContext): Observable<Array<ApplicationResponse>> {
    return this.findAllApplicationByCandidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApplicationResponse>>): Array<ApplicationResponse> => r.body)
    );
  }

  /** Path part for operation `findApplicationsByPosition()` */
  static readonly FindApplicationsByPositionPath = '/applications/allApps/{position-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findApplicationsByPosition()` instead.
   *
   * This method doesn't expect any request body.
   */
  findApplicationsByPosition$Response(params: FindApplicationsByPosition$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationResponse>>> {
    return findApplicationsByPosition(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findApplicationsByPosition$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findApplicationsByPosition(params: FindApplicationsByPosition$Params, context?: HttpContext): Observable<Array<ApplicationResponse>> {
    return this.findApplicationsByPosition$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApplicationResponse>>): Array<ApplicationResponse> => r.body)
    );
  }

}

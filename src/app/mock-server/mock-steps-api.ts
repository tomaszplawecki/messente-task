import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';


@Injectable()
export class MockStepsApi implements HttpInterceptor {

  responseDelay = 1000;

  private static getSteps(): Observable<HttpEvent<any>> {
    const successResponseCode = 200;
    const mockData = {
      hasCreatedSenderName: true,
      hasAddedCompanyInfo: false,
      accountFullyOperational: false
    };

    return of(new HttpResponse({ status: successResponseCode, body: { steps: mockData } }));
  }

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return of(null).pipe(mergeMap(() => {
      if (request.url.endsWith('/api/steps') && request.method === 'GET') {
        return MockStepsApi.getSteps();
      }
    }))
      .pipe(materialize())
      .pipe(delay(this.responseDelay)) // Add 1 second delay before response
      .pipe(dematerialize());
  }

}

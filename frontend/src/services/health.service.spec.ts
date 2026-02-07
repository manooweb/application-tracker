import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

import { HealthService, ApiHealthCheckView } from './health.service';

describe('HealthService', () => {
  let service: HealthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(HealthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensures no HTTP requests are left pending.
    // This acts as a CI safety net against forgotten or unexpected calls.
    httpMock.verify();
  });

  it('should emit "checking" then "up" when the endpoint returns ok=true', async () => {
    // Subscribe immediately to capture the synchronous startWith(...) emission
    // before the HTTP response is flushed.
    const emissionsPromise = firstValueFrom(service.apiHealthCheck$.pipe(take(2), toArray()));

    const req = httpMock.expectOne('/api/health');
    expect(req.request.method).toBe('GET');

    req.flush({ ok: true });

    const emissions = await emissionsPromise;

    expect(emissions).toEqual<ApiHealthCheckView[]>([
      { isChecking: true, isUp: false, failureMessage: null },
      { isChecking: false, isUp: true, failureMessage: null },
    ]);
  });

  it('should emit "checking" then "down" with a business message when the endpoint returns ok=false', async () => {
    // Subscribe immediately to capture the synchronous startWith(...) emission
    // before the HTTP response is flushed.
    const emissionsPromise = firstValueFrom(service.apiHealthCheck$.pipe(take(2), toArray()));

    const req = httpMock.expectOne('/api/health');
    expect(req.request.method).toBe('GET');

    req.flush({ ok: false });

    const emissions = await emissionsPromise;

    expect(emissions).toEqual<ApiHealthCheckView[]>([
      { isChecking: true, isUp: false, failureMessage: null },
      {
        isChecking: false,
        isUp: false,
        failureMessage: 'Health endpoint returned ok=false',
      },
    ]);
  });

  it('should emit "checking" then "down" with the error message when the HTTP request fails', async () => {
    // Subscribe immediately to capture the synchronous startWith(...) emission
    // before the HTTP response is flushed.
    const emissionsPromise = firstValueFrom(service.apiHealthCheck$.pipe(take(2), toArray()));

    const req = httpMock.expectOne('/api/health');
    expect(req.request.method).toBe('GET');

    req.flush({ message: 'boom' }, { status: 500, statusText: 'Server Error' });

    const emissions = await emissionsPromise;

    expect(emissions[0]).toEqual<ApiHealthCheckView>({
      isChecking: true,
      isUp: false,
      failureMessage: null,
    });

    expect(emissions[1].isChecking).toBe(false);
    expect(emissions[1].isUp).toBe(false);
    expect(emissions[1].failureMessage).toContain('/api/health');
    expect(emissions[1].failureMessage).toContain('500');
  });

  it('should share the latest value and perform a single HTTP call (shareReplay(1))', async () => {
    // Subscribe twice before flushing the HTTP response.
    // shareReplay(1) must ensure a single HTTP call is performed.
    const firstSubscription = firstValueFrom(service.apiHealthCheck$.pipe(take(2), toArray()));
    const secondSubscription = firstValueFrom(service.apiHealthCheck$.pipe(take(2), toArray()));

    const req = httpMock.expectOne('/api/health');
    expect(req.request.method).toBe('GET');
    httpMock.expectNone('/api/health');

    req.flush({ ok: true });

    const [first, second] = await Promise.all([firstSubscription, secondSubscription]);

    expect(first).toEqual<ApiHealthCheckView[]>([
      { isChecking: true, isUp: false, failureMessage: null },
      { isChecking: false, isUp: true, failureMessage: null },
    ]);

    expect(second).toEqual<ApiHealthCheckView[]>([
      { isChecking: true, isUp: false, failureMessage: null },
      { isChecking: false, isUp: true, failureMessage: null },
    ]);
  });
});

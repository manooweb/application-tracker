import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay, startWith } from 'rxjs';

type ApiHealthResponse = { ok: boolean };

export type ApiHealthCheckView = {
  isChecking: boolean;
  isUp: boolean;
  failureMessage: string | null;
};

@Injectable({ providedIn: 'root' })
export class HealthService {
  private readonly http = inject(HttpClient);

  readonly apiHealthCheck$: Observable<ApiHealthCheckView> = this.http
    .get<ApiHealthResponse>('/api/health')
    .pipe(
      map(
        ({ ok }): ApiHealthCheckView => ({
          isChecking: false,
          isUp: ok === true,
          failureMessage: ok ? null : 'Health endpoint returned ok=false',
        }),
      ),
      catchError(
        (err): Observable<ApiHealthCheckView> =>
          of<ApiHealthCheckView>({
            isChecking: false,
            isUp: false,
            failureMessage: err?.message ?? 'Unknown error',
          }),
      ),
      startWith<ApiHealthCheckView>({
        isChecking: true,
        isUp: false,
        failureMessage: null,
      }),
      shareReplay(1),
    );
}

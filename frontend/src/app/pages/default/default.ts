import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthService } from '../../../services/health.service';

type ApiHealthCheckView = {
  isChecking: boolean;
  isUp: boolean;
  failureMessage: string | null;
};

@Component({
  selector: 'default-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './default.html',
})
export class DefaultPage {
  private readonly http = inject(HttpClient);
  private readonly HealthService = inject(HealthService);

  readonly apiHealthCheck$: Observable<ApiHealthCheckView> = this.HealthService.apiHealthCheck$;
}

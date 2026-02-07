import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HealthService } from '../services/health.service';

type ApiHealthCheckView = {
  isChecking: boolean;
  isUp: boolean;
  failureMessage: string | null;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
})
export class App {
  private readonly http = inject(HttpClient);
  private readonly HealthService = inject(HealthService);

  readonly apiHealthCheck$: Observable<ApiHealthCheckView> = this.HealthService.apiHealthCheck$;
}

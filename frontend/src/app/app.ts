import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from './shared/i18n/translate.pipe';
import { MatomoService } from './services/matomo';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  readonly router = inject(Router);
  readonly matomo = inject(MatomoService);
  protected readonly copyrightStartYear = 2025;
  protected readonly copyrightEndYear = new Date().getFullYear();

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects; // ex: /projects/123
        const fullUrl = window.location.origin + path;

        const title = this.getPageTitle(path);
        this.matomo.trackPageView(fullUrl, title);
      });
  }

  private getPageTitle(path: string): string {
    if (path === '/legal-notice') return 'Legal Notice';
    if (path === '/privacy-policy') return 'Privacy Policy';
    return 'App';
  }
}

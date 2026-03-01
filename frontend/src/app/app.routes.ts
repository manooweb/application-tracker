import { Routes } from '@angular/router';
import { legalHtmlResolver } from './legal/resolvers/legal-pages';
import { LegalPageComponent } from './pages/legal/page';
import { DefaultPage } from './pages/default/default';

export const routes: Routes = [
  { path: '', component: DefaultPage },
  {
    path: 'legal-notice',
    component: LegalPageComponent,
    resolve: { html: legalHtmlResolver('legalNotice') },
  },
  {
    path: 'privacy-policy',
    component: LegalPageComponent,
    resolve: { html: legalHtmlResolver('privacyPolicy') },
  },
];

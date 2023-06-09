import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import {APP_ROUTES} from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES)
    // Interceptors here. { provide: HTTP_INTERCEPTORS, useExisting: AuthInterceptor, multi: true },
  ]
})
  .catch( err => console.error(err))

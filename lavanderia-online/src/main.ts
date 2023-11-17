import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideEnvironmentNgxMask } from 'ngx-mask';

let ngxEnviroment = [provideEnvironmentNgxMask()];
platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [ngxEnviroment]
})
  .catch(err => console.error(err));

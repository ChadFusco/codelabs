import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
  ],
})
  .catch(err => console.error(err));


// NOTE: THIS WAS BUILT AS PART OF A TUTORIAL LOCATED HERE: https://www.youtube.com/watch?v=-jRxG84AzCI&list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF&index=6
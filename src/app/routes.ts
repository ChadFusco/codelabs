import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page' // replaces the value defined by title tag in src/index.html
    }
];

export default routeConfig;
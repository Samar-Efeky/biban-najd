import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutUs } from './about-us/about-us';
import { MyProjects } from './my-projects/my-projects';
import { MyServices } from './my-services/my-services';
import { ContactUs } from './contact-us/contact-us';

export const routes: Routes = [
    { path: 'home', component: HomePage },
    { path: '', redirectTo:'home', pathMatch:'full' },
    { path: 'about-us', component:AboutUs },
    { path: 'projects', component:MyProjects },
    { path: 'services', component:MyServices },
    { path: 'contact-us', component:ContactUs },
];

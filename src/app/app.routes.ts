import { Routes } from '@angular/router';

// @todo: lazy load
import { LandingComponent } from './feature/landing/landing.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { ComingSoonComponent } from './feature/coming-soon/coming-soon.component';

export const routes: Routes = [
    {
        /**
         * Due to how our router uses blank routes to load the layouts
         * with the routes as children we must call our empty route here to detemin if its truely empty
         */
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        /**
         * Here is our first path rendered in a layout
         */
        path: '',
        loadComponent: () => import('./layout/empty/empty.component').then(m => m.EmptyComponent),
        children: [
            {
                path: 'landing',
                component: LandingComponent
            }
        ]
    },
    {
        path: '',
        loadComponent: () => import('./layout/standard/standard.component').then(m => m.StandardComponent),
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    },
    {
        path: '',
        loadComponent: () => import('./layout/standard/standard.component').then(m => m.StandardComponent),
        children: [
            {
                path: 'coming-soon',
                component: ComingSoonComponent
            }
        ]
    },
    {
        // Thie first loads the layout, then it calls the child router using that layout
        path: '',
        loadComponent: () => import('./layout/centered/centered.component').then(m => m.CenteredComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./feature/error/error.routes').then(r => r.errorRoutes)
            }
        ]
    },
    {
        // Wildcard Route
        path: '**',
        redirectTo: '404-not-found',
        pathMatch: 'full'
    }
];

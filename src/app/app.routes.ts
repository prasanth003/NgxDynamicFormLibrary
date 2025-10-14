import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'docs',
        pathMatch: 'full'
    },
    {
        path: 'docs',
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                loadComponent: () => import('./docs/overview/overview').then(m => m.Overview)
            }
        ]
    },
    {
        path: 'showcase',
        loadComponent: () => import('./showcase/showcase').then(m => m.Showcase)
    },
    {
        path: 'playground',
        loadComponent: () => import('./playground/playground').then(m => m.Playground)
    },
    {
        path: 'example',
        loadComponent: () => import('./example/example').then(m => m.Example)
    }
];

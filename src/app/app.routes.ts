import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { DataShowComponent } from './components/data-show/data-show.component';

export const routes: Routes = [
    {
        path: '',
        component: InitialComponent,
    },
    {
        path: 'data',
        component: DataShowComponent,
    }
];

import { Routes } from '@angular/router';
import {Admin} from './admin/admin';
import { SignalExample } from './signal-example/signal-example';
import { Lifecycle } from './lifecycle/lifecycle';
import { Api } from './api/api';
export const routes: Routes = [
    { path: 'admin',component:Admin},
    { path: 'signal-example', component:SignalExample},
    { path: 'lifecycle', component:Lifecycle},
    { path: 'api', component: Api}
];

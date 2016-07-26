import {provideRouter, RouterConfig} from '@angular/router';

import {LoginComponent}  from './login.component.ts';
import {ApplicationComponent} from "./application/application.component";
import {AuthGuard} from "./auth.guard.service";
import {AuthService} from "./auth.service";
import {ApplicationListComponent} from "./application/application-list.component";
import {ApplicationDetailComponent} from "./application/application-detail.component";
import {ChannelSettingComponent} from "./application/setting/channel-setting.component";

const authProviders = [AuthGuard, AuthService];

const routes:RouterConfig = [
    {path: '', redirectTo: 'apps', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'apps', component: ApplicationListComponent/*, canActivate: [AuthGuard]*/},
    {path: 'apps/:id', component: ApplicationComponent/*,canActivate: [AuthGuard]*/, children: [
        {path: '', component: ApplicationDetailComponent},
        {path: 'channel-setting', component: ChannelSettingComponent},

    ]}
];

export const appRouterProviders = [
    provideRouter(routes),
    authProviders
];
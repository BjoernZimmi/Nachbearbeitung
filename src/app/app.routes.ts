import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecendComponent } from './secend/secend.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'first', component: FirstComponent},
    {path: 'second', component: SecendComponent},
    {path: '**', component: PageNotFoundComponent}
];

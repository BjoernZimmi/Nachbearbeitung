import { ResolveFn, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecendComponent } from './secend/secend.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartComponent } from './start/start.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';


export const routes: Routes = [
    {path: 'first', title: 'First Component', component: FirstComponent,
    children: [
        {path: 'child-a', title: 'First Component - Child A', component: ChildAComponent},
        {path: 'child-b', title: 'First Component - Child B' , component: ChildBComponent}
    ]},
    {path: 'second', title: 'Second Component', component: SecendComponent},
    {path: '', component: StartComponent, pathMatch: 'full'},
    {path: 'x', redirectTo: '/first', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];


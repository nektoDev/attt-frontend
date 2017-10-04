import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {TorrentsComponent} from '../torrents/torrents.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'torrents', component: TorrentsComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

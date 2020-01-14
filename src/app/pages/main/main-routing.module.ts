import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DetailComponent } from './detail/detail.component';
import { InitGuardService } from 'src/app/services/init-guard/init-guard.service';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ InitGuardService ],//路由守卫
    children: [
      {
        path: ':id',
        component: DetailComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
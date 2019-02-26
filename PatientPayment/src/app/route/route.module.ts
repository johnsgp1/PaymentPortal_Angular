import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteRoutingModule } from './route-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

export const appRoute:Routes=[

 // {path:'PatientList',component:PatientListComponent,outlet:"sidebar"},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'',redirectTo:'/login',pathMatch:'full'},

];
@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule,
    RouterModule.forRoot(
      appRoute,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RouteModule {

 }

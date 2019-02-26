import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WizardComponent } from "./wizard/wizard.component";


export const appRoute:Routes=[
    {path:'wizard',component:WizardComponent,pathMatch:'full'},
    {path:'login',component:LoginComponent,pathMatch:'full'},
    {path:'',redirectTo:'/login',pathMatch:'full'},
  
];
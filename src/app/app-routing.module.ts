import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCentreComponent } from './add-centre/add-centre.component';
import { RemoveCentreComponent } from './remove-centre/remove-centre.component';
import { CentresComponent } from './centres/centres.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';



const routes: Routes = [
  { path:'', component: AddCentreComponent,canActivate:[AuthGuardService]},
  { path:'removecentre', component: CentresComponent,canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

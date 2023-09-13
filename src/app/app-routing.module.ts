import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Component/Main/Main.component';
import { LoginComponent } from './Component/Login/Login.component';
import { RegistrationComponent } from './Component/Registration/Registration.component';
import { NavigationComponent } from './Component/Navigation/Navigation.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'auth',component:NavigationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

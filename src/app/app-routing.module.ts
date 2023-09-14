import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Component/Main/Main.component';
import { LoginComponent } from './Component/Login/Login.component';
import { RegistrationComponent } from './Component/Registration/Registration.component';
import { NavigationComponent } from './Component/Navigation/Navigation.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'auth',component:NavigationComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

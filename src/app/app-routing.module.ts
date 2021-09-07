import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/login/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/login/component/header/header.component';
import { FooterComponent } from './shared/login/component/footer/footer.component';
import { DashboardComponent } from './core/component/dashboard/dashboard.component';
const routes: Routes = [
  {path : 'sidebar' , component:  SidebarComponent},
  {path : 'header' , component :HeaderComponent },
  {path : 'footer' , component : FooterComponent },
  {path : 'dashboard' , component : DashboardComponent},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

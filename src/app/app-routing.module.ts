import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/login/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/login/component/header/header.component';
import { FooterComponent } from './shared/login/component/footer/footer.component';
import { DashboardComponent } from './core/component/dashboard/dashboard.component';
import { AddClientComponent } from './core/component/add-client/add-client.component';
import { ManageClientComponent } from './core/component/manage-client/manage-client.component';
import { AddProjectComponent } from './core/component/add-project/add-project.component';
import { ManageProjectComponent } from './core/component/manage-project/manage-project.component';
import { AddUserComponent } from './core/component/add-user/add-user.component';
import { ManageUserComponent } from './core/component/manage-user/manage-user.component';
import { AddMasterAssetComponent } from './core/component/add-master-asset/add-master-asset.component';
import { ManageMasterAssetComponent } from './core/component/manage-master-asset/manage-master-asset.component';
import { ContactComponent } from './core/component/contact/contact.component';
import { QueriesComponent } from './core/component/queries/queries.component';




const routes: Routes = [
  {path : 'sidebar' , component:  SidebarComponent},
  {path : 'header' , component :HeaderComponent },
  {path : 'footer' , component : FooterComponent },
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'client' , component : AddClientComponent},
  {path : 'manage-client' , component : ManageClientComponent},
  {path : 'project' , component : AddProjectComponent},
  {path : 'manage-project' , component : ManageProjectComponent},
  {path : 'user' , component : AddUserComponent},
  {path : 'manage-user' , component : ManageUserComponent},
  {path : 'master-asset' , component : AddMasterAssetComponent},
  {path : 'manage-master-asset' , component : ManageMasterAssetComponent},
  {path : 'contact' , component : ContactComponent},  
  {path : 'queries' , component : QueriesComponent},  



];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { DashboardComponent } from './core/component/dashboard/dashboard.component';
import { AddClientComponent } from './core/component/add-client/add-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ManageClientComponent } from './core/component/manage-client/manage-client.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddProjectComponent } from './core/component/add-project/add-project.component';
import { ManageProjectComponent } from './core/component/manage-project/manage-project.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddUserComponent } from './core/component/add-user/add-user.component';
import { ManageUserComponent } from './core/component/manage-user/manage-user.component';
import { AddMasterAssetComponent } from './core/component/add-master-asset/add-master-asset.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ManageMasterAssetComponent } from './core/component/manage-master-asset/manage-master-asset.component';
import { ContactComponent } from './core/component/contact/contact.component';
import { QueriesComponent } from './core/component/queries/queries.component';
import { AuditsComponent } from './core/component/audits/audits.component';
import { ReportOneComponent } from './core/component/report-one/report-one.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AddClientComponent,
    ManageClientComponent,
    AddProjectComponent,
    ManageProjectComponent,
    AddUserComponent,
    ManageUserComponent,
    AddMasterAssetComponent,
    ManageMasterAssetComponent,
    ContactComponent,
    QueriesComponent,
    AuditsComponent,
    ReportOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    AgGridModule.withComponents([]),
    MatAutocompleteModule,
    HttpClientModule,
    NgxFileDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

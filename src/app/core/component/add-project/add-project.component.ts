import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../../service/client/client.service';
import { ProjectData } from '../../data-models/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectFormData!: FormGroup;
  clientAlias: any = [];
  isLoading:boolean=false;
  requiredColumns: string[] = ['AssetAlias', 'AssetBarCode'
    , 'AssetLocation',
    'AssetSubLocation', 'AuditObservations',
    'VMQty', 'Tray1', 'Tray2', 'Tray3',
    'Tray4', 'Tray5', 'Tray6', 'SoldDetails',
    'ReturnDetails', 'Location', 'TaggingStatus',
    'AssetMovability', 'AssetCondition', 'AuditRemarks1',
    'AuditRemarks2', 'AuditRemarks3', 'AuditRemarks4',
    'NewDesc', 'Size', 'Model', 'EmpCode,Brand']

  constructor(private api: ProjectService,
    private clientService: ClientService,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    this.projectFormData = new FormGroup({
      ClientId: new FormControl("",[Validators.required]),
      ProjectCode: new FormControl("",[Validators.required]),
      ProjectAlias: new FormControl("",[Validators.required]),
      ProjectName: new FormControl("",[Validators.required]),
      RequiredColumns: new FormControl("",[Validators.required]),
    })
    this.clientService.getClientdata()
      .subscribe(res => {
        this.clientAlias = res;
      })
  }

  submitData() {
  var projectList : ProjectData ={
  ClientId:this.projectFormData.value.ClientId,
  ProjectCode:this.projectFormData.value.ProjectCode,
  ProjectAlias:this.projectFormData.value.ProjectAlias,
  ProjectName:this.projectFormData.value.ProjectName,
 RequiredColumns :this.projectFormData.value.RequiredColumns.toString(),
  }
// console.log(this.projectFormData.patchValue({
//      ...this.projectFormData.value,
//     RequiredColumns:this.projectFormData.value.RequiredColumns.toString(),
//   }))
this.isLoading=true;
      this.api.createProjectData(projectList)
    .subscribe(response => {
      console.log(response);
      this.isLoading=false;
      this.toastr.success('Proejct Added Successfully');
      this.projectFormData.reset();
    },
      error => {
        this.isLoading=false;
        this.toastr.error('something went wrong');
        console.log(error);
      })
   }
   resetData()
   {
    this.projectFormData.reset();
   }
}

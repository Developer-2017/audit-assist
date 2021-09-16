import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';
import { FormGroup , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectFormData!: FormGroup;
   clientAlias : any = [];
   requiredColumns : string [] = ['AssetAlias','AssetBarCode'
   ,'AssetLocation',
   'AssetSubLocation','AuditObservations',
   'VMQty','Tray1','Tray2','Tray3',
   'Tray4','Tray5','Tray6','SoldDetails',
   'ReturnDetails','Location','TaggingStatus',
   'AssetMovability','AssetCondition','AuditRemarks1',
   'AuditRemarks2','AuditRemarks3','AuditRemarks4',
   'NewDesc','Size','Model','EmpCode,Brand']
  constructor(private api : ProjectService ,private toastr: ToastrService) { }
  ngOnInit(): void {
     this.projectFormData = new FormGroup({
      ClientId: new FormControl(""),
      ProjectCode: new FormControl(""),
      ProjectAlias: new FormControl(""),
      ProjectName: new FormControl(""),
      RequiredColumns: new FormControl("")
     })
     this.api.getProjectdata()
     .subscribe(res=>{
       this.clientAlias = res;
     })
  } 
   
  submitData() {
    var rv : any  = {};
    for (var i = 0; i < this.projectFormData.value.RequiredColumns.length; ++i)
        if (this.projectFormData.value.RequiredColumns[i] !== undefined) rv[i] = this.projectFormData.value.RequiredColumns[i];
    console.log(rv);
        // this.api.createProjectData(this.projectFormData.value)
    //   .subscribe(response => {
    //     this.toastr.success('Client Added Successfully');
    //     this.projectFormData.reset();
    //   },
    //     error => {
    //       this.toastr.success('something went wrong');
    //       console.log(error);
    //     })
  }
    
}

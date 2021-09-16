import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
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
  constructor(private api : ProjectService) { }

  ngOnInit(): void {
     this.api.getProjectdata()
     .subscribe(res=>{
       this.clientAlias = res;
        console.log(this.clientAlias);
        // console.log(this.requiredColumns);
     })
  }

}

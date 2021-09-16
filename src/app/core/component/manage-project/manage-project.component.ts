import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client/client.service';
import { ProjectService } from '../../service/project/project.service';
@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
  constructor(private api : ClientService , private project : ProjectService) { }
 clientAlias : any = [];
  ngOnInit(): void {
     this.api.getClientdata()
     .subscribe(response=>{
       this.clientAlias = response;
     })
  }

  getProjectById(Client: any){

     this.project.getProjectDataById(Client)
     .subscribe(response=>{
      console.log(response);
     })
  }
}

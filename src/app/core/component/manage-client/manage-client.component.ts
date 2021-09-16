import { Component, OnInit } from '@angular/core';
import { ClientData } from '../../data-models/client';
import { ClientService } from '../../service/client/client.service';
@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.css']
})
export class ManageClientComponent implements OnInit {
  rowData:ClientData[]|undefined
  columnDefs = [
    {headerName: 'Client Code', field: 'ClientCode' },
		{headerName: 'Client Alias', field: 'ClientAlias' },
		{headerName: 'SPOC Name', field: 'SPOCName'},
    {headerName: 'SPOC Email', field: 'SPOCEmail'},
    {headerName: 'SPOC Mobile', field: 'SPOCMobile'}

];

  constructor(private api: ClientService) { }

  ngOnInit(): void {
    this.api.getClientdata()
    .subscribe(response=>{
      console.log(response);
    this.rowData=response
    console.log("vdf"+this.rowData);
      alert("Successfully");
    },
    error=>{
      console.log(error);
    })
  }


}

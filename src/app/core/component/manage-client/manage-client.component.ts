import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client/client.service';
@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.css']
})
export class ManageClientComponent implements OnInit {
  columnDefs = [
    {headerName: 'Client Code', field: 'ClientCode' },
		{headerName: 'Client Alias', field: 'ClientAlias' },
		{headerName: 'SPOC Name', field: 'SPOCName'},
    {headerName: 'SPOC Email', field: 'SPOCEmail'},
    {headerName: 'SPOC Mobile', field: 'SPOCMobile'}

];

rowData = [
    { ClientCode: 'Toyota', ClientAlias: 'Celica', SPOCName: 35000 , SPOCEmail: 'NA', SPOCMobile : 'NA'},
    { ClientCode: 'Ford', ClientAlias: 'Mondeo', SPOCName: 32000 , SPOCEmail : 'Na',SPOCMobile : 'NA'},
    { ClientCode: 'Porsche', ClientAlias: 'Boxter', SPOCName: 72000 , SPOCEmail :'NA' ,SPOCMobile : "NA"}
];

  constructor(private api: ClientService) { }

  ngOnInit(): void {
    this.api.addClientdata().subscribe(response=>{
       console.log(response);
    })
  }
   

}

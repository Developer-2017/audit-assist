import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  columnDefs = [
    {headerName: 'Emp Code', field: 'EmpCode',},
		{headerName: 'Name', field: 'Name' },
		{headerName: 'Last Name', field: 'LastName'},
    {headerName: 'Mobile', field: 'Mobile'},
    {headerName: 'Password', field: 'Password'},
    {headerName: 'DeviceId', field: 'DeviceId'},
    {headerName: 'Status', field: 'Status'},
    {headerName: 'Action', field: 'Action',cellRenderer : function(){
      return '<div class="grid_btn"><button class="btn btn-default btn-sm"><i class="fa fa-paper-plane-o"></i></button><button class="btn btn-danger btn-sm"><i class="fa fa-times"></i></button></div>'
  }},
];

rowData = [
    { EmpCode: 'Toyota', Name: 'Celica', LastName: 35000 , Mobile: 'NA', Password : 'NA' , DeviceId : 'NA',Status:'NA',Action: 'NA'},
];
defaultColDef = {
  autoHeight : true
}
  constructor() { }

  ngOnInit(): void {
  }

}

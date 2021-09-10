import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {
  columnDefs = [
    {headerName: 'Emp Code', field: 'EmpCode', sortable : true ,filter: true},
		{headerName: 'Name', field: 'Name', sortable : true},
		{headerName: 'Last Name', field: 'LastName' ,sortable : true },
    {headerName: 'Mobile', field: 'Mobile',sortable : true},
    {headerName: 'Password', field: 'Password',sortable : true},
    {headerName: 'DeviceId', field: 'DeviceId',sortable : true},
    {headerName: 'Status', field: 'Status',sortable : true},
    {headerName: 'Action', field: 'Action',sortable : true,
    cellRenderer : function(){
      return '<div class="grid_btn"><button class="btn btn-default btn-sm"><i class="fa fa-paper-plane-o"></i></button><button class="btn btn-danger btn-sm"><i class="fa fa-times"></i></button></div>'
  }}
];

rowData = [
    { EmpCode: 'Toyota', Name: 'Celica', LastName: 35000 , Mobile: 'NA', Password : 'NA' , DeviceId : 'NA',Status:'NA',Action: ''},
];
 defaultColDef = {
    autoHeight : true
 }
  constructor() { }

  ngOnInit(): void {
  }

}

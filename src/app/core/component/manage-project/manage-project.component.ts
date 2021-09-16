import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client/client.service';
import { ProjectService } from '../../service/project/project.service';
import { ProjectData } from '../../data-models/project';
import { MenuDropDownRendrer } from 'src/app/shared/component/menudropdown_rendrer/menu_dropdown_rendrer';
@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
  rowData: ProjectData[] | undefined

  frameworkComponents = {
    dropdownMenuRendrer: MenuDropDownRendrer,
  };
  defaultColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    wrapText: true,
    sortable: true,
    autoHeight: true,
  };
  columnDefs = [
    { headerName: 'ClientId', field: 'ClientId' },
    { headerName: 'ProjectCode', field: 'ProjectCode' },
    { headerName: 'ProjectName', field: 'ProjectName' },
    { headerName: 'ProjectAlias', field: 'ProjectAlias' },
    { headerName: 'RequiredColumns', field: 'RequiredColumns' },
   
    {
      headerName: 'Status', field: 'Status', cellClass: "grid-cell-centered", cellRenderer: function () {
        return '<span class="label label-success text-white">Active</span>'
      }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      cellRenderer: 'dropdownMenuRendrer',
      filter: false,
      width: 120,
      cellRendererParams: (params: any) => ({
        dataMap: [
          {
            name: 'Edit',
            shouldShow: true,
            callback: () => {

            },
          },
          {
            name: "sent",
            shouldShow: true,

          }
        ],
      }),
    },
  ];

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
      this.rowData = response
      // console.log(response);
     })
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MenuDropDownRendrer } from 'src/app/shared/component/menudropdown_rendrer/menu_dropdown_rendrer';
import { ClientData } from '../../data-models/client';
import { ClientService } from '../../service/client/client.service';
@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.css']
})
export class ManageClientComponent implements OnInit {
  rowData: ClientData[] | undefined

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
    { headerName: 'Client Code', field: 'ClientCode' },
    { headerName: 'Client Alias', field: 'ClientAlias' },
    { headerName: 'SPOC Name', field: 'SPOCName' },
    { headerName: 'SPOC Email', field: 'SPOCEmail' },
    { headerName: 'SPOC Mobile', field: 'SPOCMobile' },
    { headerName: 'Escalation Name', field: 'EscalationName' },
    { headerName: 'Escalation Email', field: 'EscalationEmail' },
    { headerName: 'Escalation Mobile', field: 'EscalationMobile' },
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

  constructor(private api: ClientService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.api.getClientdata()
      .subscribe(response => {
        // console.log(response);
        this.rowData = response

        // console.log("vdf"+this.rowData);
      },
        error => {
          this.toastr.error('something went wrong');
          console.log(error);
        })
  }

  show() {
    alert("hello");
  }
}

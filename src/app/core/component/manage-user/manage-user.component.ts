import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserData } from '../../data-models/user';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  rowData: UserData[] | undefined
  columnDefs = [
    { headerName: 'Emp Code', field: 'EmpCode', },
    { headerName: 'Name', field: 'FName' },
    { headerName: 'Last Name', field: 'LName' },
    { headerName: 'Mobile', field: 'Mobile' },
    { headerName: 'Password', field: 'Password' },
    { headerName: 'DeviceId', field: 'eviceId' },
  //   {
  //     headerName: 'Status', field: 'Status', cellClass: "grid-cell-centered", cellRenderer: function () {
  //       return '<span class="label label-success text-white">Active</span>'
  //   }
  // },
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

  defaultColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    wrapText: true,
    sortable: true,
    autoHeight: true,
  };
  constructor(private userService: UserService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserData().subscribe(res => {
      this.rowData = res;
    },
      error => {
        this.toastr.error('something went wrong');
      }
    )
  }

}

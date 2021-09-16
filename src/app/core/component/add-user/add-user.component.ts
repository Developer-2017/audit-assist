import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserData } from '../../data-models/user';
import { ClientService } from '../../service/client/client.service';
import { ProjectService } from '../../service/project/project.service';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userFormData!:FormGroup;
  clientAlias: any = [];
  projectAlias: any = [];
  isLoading :boolean=false;
  constructor(private userService:UserService,private toastr:ToastrService,
    private projectService: ProjectService,
    private clientService: ClientService,) { }

  ngOnInit(): void {
    this.userFormData = new FormGroup({
      empCode: new FormControl("",[Validators.required]),
      fName: new FormControl("",[Validators.required]),
      lName: new FormControl("",[Validators.required]),
      mobile: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      deviceId: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
      assignedClients: new FormControl("",[Validators.required]),
      assignedProjects: new FormControl("",[Validators.required]),
    })
    this.clientService.getClientdata()
      .subscribe(res => {
        this.clientAlias = res;
      })
      this.projectService.getProjectdata()
      .subscribe(res => {
        this.projectAlias = res;
      })
  }

  submitData()
  {

    var userList : UserData ={
      empCode:this.userFormData.value.empCode,
      fName:this.userFormData.value.fName,
      lName:this.userFormData.value.lName,
      mobile:this.userFormData.value.mobile,
      email:this.userFormData.value.email,
      deviceId:this.userFormData.value.deviceId,
      password:this.userFormData.value.password,
      assignedClients :this.userFormData.value.assignedClients.toString(),
      assignedProjects :this.userFormData.value.assignedProjects.toString(),
      }

    this.userService.createUserData(userList).subscribe(res=>
      {
        this.isLoading=false;
        this.toastr.success('User Added Successfully');
        this.userFormData.reset();
      },
      error => {
        this.isLoading=false;
        this.toastr.error('something went wrong');
        console.log(error);
      })

  }
  resetData()
  {
   this.userFormData.reset();
  }
}

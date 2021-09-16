import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client/client.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientFormData!: FormGroup;
  isLoading:boolean = false;
  constructor(private api: ClientService, private toastr: ToastrService,public fb:FormBuilder) { }
  ngOnInit(): void {
    this.clientFormData = this.fb.group({
      clientCode: new FormControl("",[Validators.required]),
      clientAlias: new FormControl("",[Validators.required]),
      organizationName: new FormControl("",[Validators.required]),
      sPOCName: new FormControl("",[Validators.required]),
      sPOCEmail: new FormControl("",[Validators.required,Validators.email]),
      sPOCMobile: new FormControl("",[Validators.required]),
      escalationName: new FormControl("",[Validators.required]),
      escalationEmail: new FormControl("",[Validators.required,Validators.email]),
      escalationMobile: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
    })
  }
  submitData() {
    if(this.clientFormData.valid){
    this.isLoading = true;
    this.api.createClientData(this.clientFormData.value)
      .subscribe(response => {
        this.isLoading = false;
        this.toastr.success('Client Added Successfully');
        this.clientFormData.reset();
        this.clientFormData.setErrors(null);
        this.clientFormData.updateValueAndValidity();
      },
        error => {
          this.isLoading = false;
          this.toastr.success('something went wrong');
          console.log(error);
        })
      }
      else{
        this.clientFormData.reset()

      }
  }
  resetData() {

    this.clientFormData.reset();
  }
}

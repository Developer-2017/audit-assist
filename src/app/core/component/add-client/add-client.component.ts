import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client/client.service';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
    clientFormData! : FormGroup;

  constructor(private api : ClientService) { }
     ngOnInit(): void {
      this.clientFormData = new FormGroup({
       clientCode: new FormControl(""),
       clientAlias: new FormControl(""),
       organizationName: new FormControl(" "),
       sPOCName: new FormControl(""),
       sPOCEmail: new FormControl(""),
       sPOCMobile: new FormControl(""),
       escalationName: new FormControl(""),
       escalationEmail: new FormControl(""),
       escalationMobile: new FormControl(""),
       address: new FormControl(""),
     })
  }
    submitData(){
       this.api.createClientData(this.clientFormData.value)
       .subscribe(response=>{
         console.log(response);
         alert("Successfully");
       },
       error=>{
         console.log(error);
       })  
    }
}

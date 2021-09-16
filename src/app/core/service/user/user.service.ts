import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ADD_USER } from '../../constants';
import { UserData } from '../../data-models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) { }
  createUserData(userModel : UserData){
    return this.http.post(this.baseUrl + ADD_USER,userModel)
    .pipe(map((res : any)=>{
      return res;
    }))
  }
  
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ClientModel } from '../../data-models/clients/client.model';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {ADD_CLIENT} from '../../constants';
import { GET_CLIENT } from '../../constants';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
    baseUrl = environment.baseURL;

  constructor(private http:HttpClient) { }

    createClientData(ClientModel : ClientModel){
      return this.http.post(this.baseUrl + ADD_CLIENT,ClientModel)
      .pipe(map((res : any)=>{
        return res;
      }))
    }
    getClientdata(){
       return this.http.get(this.baseUrl + GET_CLIENT,)
       .pipe(map((res : any)=>{
         return res;
       }))
    }
}

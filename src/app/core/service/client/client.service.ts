import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_NEW_CLIENT } from '../../constants';
import { ClientData } from '../../data-models/client';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient :HttpClient) { }
  createNewClient(client:ClientData):Observable<ClientData>{
    return this.httpClient.post<ClientData>(ADD_NEW_CLIENT,client).pipe(
      map(data=>data as ClientData))
   }


}

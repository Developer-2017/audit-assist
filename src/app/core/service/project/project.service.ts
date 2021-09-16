import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GET_CLIENT } from '../../constants';
// import { ProjectData } from '../../data-models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) { }
  getProjectdata(){
    return this.http.get(this.baseUrl + GET_CLIENT,)
    .pipe(map((res : any)=>{
      return res;
    }))
 }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GET_CLIENT } from '../../constants';
import { ProjectData } from '../../data-models/project';
import { ADD_PROJECT } from '../../constants';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) { }
  createProjectData(ProjectModel : ProjectData){
    return this.http.post(this.baseUrl + ADD_PROJECT,ProjectModel)
    .pipe(map((res : any)=>{
      return res;
    }))
  }
//   getProjectdata(){
//     return this.http.get(this.baseUrl + GET_CLIENT,)
//     .pipe(map((res : any)=>{
//       return res;
//     }))
//  }
}

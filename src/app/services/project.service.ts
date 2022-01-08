import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Project } from '../models/project';
import { Global } from "./gobal";
import { Params } from '@angular/router';
//import { Project } from 'src/app/models/project';


@Injectable()
export class ProjectService{
  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  testService(){
    return 'probando servicio';
  }

  saveProject(project: Project):Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.post(this.url+'save-project',params,{headers:headers});
  }

  getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'projects', {headers: headers});
  }

  getProject(id: string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'project/'+id,{headers:headers});
  }

  deleteProject(id: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.delete(this.url+'project/'+id, {headers: headers});
  }

  updateProject(Project: { _id: any; }): Observable<any>{
    let params = JSON.stringify(Project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(`${this.url}project/${Project._id}`,params, {headers: headers});
  }
}






















function params(arg0: string, params: any): Observable<any> {
  throw new Error("Function not implemented.");
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  //Trae todo el json
  __getProjects() {
    return this.http.get('/api/project/GetProject');
  }
}

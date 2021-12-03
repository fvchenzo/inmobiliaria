import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private readonly http: HttpClient) { }

  //Trae todo el json
  __getApartments() {
    return this.http.get('/api/apartment/GetApartments');
  }

}

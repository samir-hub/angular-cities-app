import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class cityService {
  constructor(private httpclient: HttpClient) {}

  getCities(): Observable<any> {
    return this.httpclient.get("http://localhost:3000/cities/");
  }

  getCityById(id: string): Observable<any> {
    return this.httpclient.get(`http://localhost:3000/cities/${id}`);
  }

  addCity(city): Observable<any> {
    console.log(city)
    return this.httpclient.post("http://localhost:3000/cities/", city, httpOptions);
  }
}

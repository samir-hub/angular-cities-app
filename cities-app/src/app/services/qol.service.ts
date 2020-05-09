import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class qolService {
  constructor(private httpclient: HttpClient) {}

  getqolCities(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:new-york/scores/"
    );
  }
}

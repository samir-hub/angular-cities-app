import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class qolService {
  constructor(private httpclient: HttpClient) {}

  getqolCity(city: string): Observable<any> {
    console.log(city)
    return this.httpclient.get(
      `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
    )
  }

  getqolCities(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:new-york/scores/"
    );
  }

  getqolAustin(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:austin/scores/"
    );
  }

  getqolChicago(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:chicago/scores/"
    );
  }

  getqolLA(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/"
    );
  }

  getqolHouston(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:houston/scores/"
    );
  }

  getqolSeattle(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:seattle/scores/"
    );
  }

  getqolDC(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:washington-dc/scores/"
    );
  }

  getqolAtlanta(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:atlanta/scores/"
    );
  }

}

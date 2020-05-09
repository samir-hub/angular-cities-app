import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class imageService {
  constructor(private httpclient: HttpClient) {}

  getNYImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:new-york/images/"
    );
  }

  getAustinImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:austin/images/"
    );
  }

  getChicagoImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:chicago/images/"
    );
  }

  getLAImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:los-angeles/images/"
    );
  }

  getHoustonImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:houston/images/"
    );
  }

  getSeattleImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:seattle/images/"
    );
  }

  getDCImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:washington-dc/images/"
    );
  }

  getAtlantaImages(): Observable<any> {
    return this.httpclient.get(
      "https://api.teleport.org/api/urban_areas/slug:atlanta/images/"
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class cityService {
    constructor(private httpclient: HttpClient){}

    getCities(): Observable<any> {
        return this.httpclient.get(
          "http://localhost:3000/cities/"
        );
      }
}
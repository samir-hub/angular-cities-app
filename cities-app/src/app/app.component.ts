import { Component } from '@angular/core';
import { qolService } from './services/qol.service'; 
import { QOLCities } from './classes/citiesqol'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _qolService: qolService){
  }

  listQOLData: QOLCities[]; 

  ngOnInit(){
    this._qolService.getqolCities()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }


}

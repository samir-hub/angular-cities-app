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

  onClickAustin(){
    this._qolService.getqolAustin()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

  onClickNewYork(){
    this._qolService.getqolCities()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

  onClickChicago(){
    this._qolService.getqolChicago()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

  onClickLA(){
    this._qolService.getqolLA()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

  onClickHouston(){
    this._qolService.getqolHouston()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

  onClickSeattle(){
    this._qolService.getqolSeattle()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

  onClickDC(){
    this._qolService.getqolDC()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

  onClickAtlanta(){
    this._qolService.getqolAtlanta()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
      }
    )
  }

}

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
  summary: string; 
  teleport_city_score: number; 

  onClickAustin(){
    this._qolService.getqolAustin()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score; 
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
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score;
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
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score;
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
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score;
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
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score;
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
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score;
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
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score;
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
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score;
      }
    )
  }

}

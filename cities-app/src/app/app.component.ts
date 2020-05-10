import { Component } from '@angular/core';
import { qolService } from './services/qol.service'; 
import { QOLCities } from './classes/citiesqol'; 
import { Cities } from './classes/cities';
import { imageService } from './services/image.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _qolService: qolService, private _imageService: imageService){
  }

  listQOLData: QOLCities[]; 
  listCities: Cities[]; 
  summary: string; 
  teleport_city_score: number; 
  mobileImage: string; 
  webImage: string; 

  onClickAustin(){
    this._qolService.getqolAustin()
    .subscribe
    (
      data=>
      {
        this.listQOLData = data.categories; 
        this.summary = data.summary.replace(/<p>/g, '').replace(/<b>/g, '').replace(/<\/p>/g, '').replace(/<\/b>/g, '');
        this.teleport_city_score = data.teleport_city_score.toFixed(2); 
      }
    )
    this._imageService.getAustinImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
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
        this.teleport_city_score = data.teleport_city_score.toFixed(2);
      }
    )
    this._imageService.getNYImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
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
        this.teleport_city_score = data.teleport_city_score.toFixed(2);
      }
    )
    this._imageService.getChicagoImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
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
        this.teleport_city_score = data.teleport_city_score.toFixed(2);
      }
    )
    this._imageService.getLAImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
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
        this.teleport_city_score = data.teleport_city_score.toFixed(2);
      }
    )
    this._imageService.getHoustonImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
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
        this.teleport_city_score = data.teleport_city_score.toFixed(2);
      }
    )
    this._imageService.getSeattleImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
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
        this.teleport_city_score = data.teleport_city_score.toFixed(2);
      }
    )
    this._imageService.getDCImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
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
        this.teleport_city_score = data.teleport_city_score.toFixed(2);
      }
    )
    this._imageService.getAtlantaImages()
    .subscribe
    (
      data=> 
      {
        this.mobileImage = data.photos[0].image.mobile; 
        this.webImage = data.photos[0].image.web; 
      }
    )
  }

}

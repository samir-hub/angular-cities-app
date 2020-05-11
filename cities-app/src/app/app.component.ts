import { Component } from "@angular/core";
import { qolService } from "./services/qol.service";
import { QOLCities } from "./classes/citiesqol";
import { Cities } from "./classes/cities";
import { imageService } from "./services/image.service";
import { cityService } from "./services/city.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private _qolService: qolService,
    private _imageService: imageService,
    private _cityService: cityService
  ) {}

  listQOLData: QOLCities[];
  listCities: Cities[];
  cityToDisplay: string;
  summary: string;
  teleport_city_score: number;
  mobileImage: string;
  webImage: string;

  ngOnInit() {
    this._cityService.getCities().subscribe((data) => {
      this.listCities = data;
    });
  }

  onClick(city: string) {
    let lowerCase = city.toLowerCase(); 
    let splitCity = lowerCase.split(" ");
    
    console.log(splitCity)
    this.cityToDisplay = city;
    this._qolService.getqolCity(this.cityToDisplay).subscribe((data) => {
      this.listQOLData = data.categories;
      this.summary = data.summary
        .replace(/<p>/g, "")
        .replace(/<b>/g, "")
        .replace(/<\/p>/g, "")
        .replace(/<\/b>/g, "");
      this.teleport_city_score = data.teleport_city_score.toFixed(2);
    });
    this._imageService.getImages(this.cityToDisplay).subscribe((data) => {
      this.mobileImage = data.photos[0].image.mobile;
      this.webImage = data.photos[0].image.web;
    });
  }
}

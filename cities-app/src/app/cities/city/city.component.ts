import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Cities } from "../../classes/cities";
import { QOLCities } from "../../classes/citiesqol";
import { cityService } from "../../services/city.service";
import { qolService } from "../../services/qol.service";
import { imageService } from "../../services/image.service";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
})
export class CityComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _cityService: cityService,
    private _qolService: qolService,
    private _imageService: imageService
  ) {}

  id: string;
  city: string;
  listQOLData: QOLCities[];
  listCities: Cities[];
  summary: string;
  teleport_city_score: number;
  mobileImage: string;
  webImage: string;
  cityToDisplay: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this._cityService.getCityById(this.id).subscribe((data) => {
      this.city = data.name;
      let lowerCase = this.city.toLowerCase();
      let splitCity = lowerCase.split(" ");
      if (splitCity.length > 1) {
        this.cityToDisplay = `${splitCity[0]}-${splitCity[1]}`;
      } else {
        this.cityToDisplay = splitCity[0];
      }
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
    });

  }

  ngOnChanges(){
    
  }
}

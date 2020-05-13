import { Component, OnInit } from "@angular/core";
import { Cities } from "../../classes/cities";
import { cityService } from "../../services/city.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cities-list",
  templateUrl: "./cities-list.component.html",
  styleUrls: ["./cities-list.component.css"],
})
export class CitiesListComponent implements OnInit {
  constructor(
    private _cityService: cityService,
    private formBuilder: FormBuilder
  ) {this.cityForm = this.formBuilder.group({
    id: "",
    name: "",
  });}

  listCities: Cities[];
  cityForm;

  ngOnInit() {
    this._cityService.getCities().subscribe((data) => {
      this.listCities = data;
    });
  }

  onSubmit(cityData) {
    // Process checkout data here
    this._cityService.addCity(cityData).subscribe(
      data => {
        this.listCities.push(data); 
      }
    )
  }
}

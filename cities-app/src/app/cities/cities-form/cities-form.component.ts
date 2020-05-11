import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { cityService } from "../../services/city.service";

@Component({
  selector: "app-cities-form",
  templateUrl: "./cities-form.component.html",
  styleUrls: ["./cities-form.component.css"],
})
export class CitiesFormComponent implements OnInit {

  cityForm;

  constructor(
    private _cityService: cityService,
    private formBuilder: FormBuilder
  ) {
    this.cityForm = this.formBuilder.group({
      id: "",
      name: "",
    });
  }

  ngOnInit() {}

  onSubmit(cityData) {
    // Process checkout data here
    this._cityService.addCity(cityData).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}

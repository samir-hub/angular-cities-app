import { Component, OnInit } from '@angular/core';
import { Cities } from '../../classes/cities';
import { cityService } from '../../services/city.service'; 

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  constructor(private _cityService: cityService) { }

  listCities: Cities[];

  ngOnInit() {
    this._cityService.getCities().subscribe((data) => {
      this.listCities = data;
    });
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { qolService } from './services/qol.service';
import { imageService } from './services/image.service'; 
import { cityService } from './services/city.service'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { CityComponent } from './cities/city/city.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    CityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [qolService, imageService, cityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

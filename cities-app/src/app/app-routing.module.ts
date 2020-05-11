import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesListComponent } from './cities/cities-list/cities-list.component'; 
import { HomeComponent } from './home/home.component'; 
import { CityComponent } from './cities/city/city.component'; 

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cities', component: CitiesListComponent},
  {path: 'city/:id', component: CityComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

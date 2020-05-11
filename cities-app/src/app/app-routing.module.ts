import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesListComponent } from './cities/cities-list/cities-list.component'; 
import { HomeComponent } from './home/home.component'; 

const routes: Routes = [
  {path: 'cities', component: CitiesListComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

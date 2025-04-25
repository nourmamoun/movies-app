import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '',redirectTo: 'all', pathMatch: 'full'},
    {path: 'all',component: ProductsComponent},
    {path: 'movies',component: MoviesComponent},
    {path: 'tv-shows',component: TvComponent},
    {path: 'persons',component:PeopleComponent},




    {path: '**', component: NotFoundComponent}, // Wildcard route for a 404 page



];

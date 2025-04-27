import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PeopleComponent } from './pages/people/people.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    {path: '',redirectTo: 'all', pathMatch: 'full'},
    {path: 'all',component: ProductsComponent},
    {path: 'movies',component: MoviesComponent},
    {path: 'tv-shows',component: TvComponent},
    {path: 'persons',component:PeopleComponent},
    {path:'details/:id',component:ProductDetailsComponent}, 



    {path: '**', component: NotFoundComponent}, // Wildcard route for a 404 page



];

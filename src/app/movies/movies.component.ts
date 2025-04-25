import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { AllCategoriesService } from '../service/all-categories.service';
import { MoviesItemComponent } from "../movies-item/movies-item.component";


@Component({
  selector: 'app-movies',
  imports: [MoviesItemComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})

export class MoviesComponent implements OnInit {
movies!:Movies[]
constructor(private _allCategoriesService:AllCategoriesService){}

ngOnInit(): void {
  this.getAllMovies()
}

getAllMovies(){
  this._allCategoriesService.getAllMovies().subscribe({
    next: (data) => {
      console.log('All movies:', data);
      this.movies = data.results;
    },
    error: (error) => {
      console.error('Error fetching all movies:', error);
    },
    complete: () => {
      console.log('All movies fetch complete');
    }
  })
}
}

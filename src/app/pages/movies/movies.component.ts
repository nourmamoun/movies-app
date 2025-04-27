import { Component, OnInit } from '@angular/core';
import { AllCategoriesService } from '../../service/all-categories.service';
import { ProductItemComponent } from "../product-item/product-item.component";
import { All } from '../../interfaces/all';


@Component({
  selector: 'app-movies',
  imports: [ProductItemComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})

export class MoviesComponent implements OnInit {
movies!:All[]
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

import { Component, OnInit } from '@angular/core';
import { All } from '../../interfaces/all';
import { AllCategoriesService } from '../../service/all-categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
all!: All
productID!: number;
constructor(private route: ActivatedRoute, private _allCategoriesService:AllCategoriesService){}

ngOnInit(): void {
  this.productID = this.route.snapshot.params['id'];
  let mediaType = this.route.snapshot.queryParams['type']; 
  console.log(this.productID, mediaType);
  this.getAllMoviesById(this.productID);
  this.getAllTvById(this.productID);
}
getAllMoviesById(id: number) {
  this._allCategoriesService.getMovieById(id).subscribe({
    next: (data) => {
      console.log('All movies by ID:', data);
      this.all = data;
    },
    error: (error) => {
      console.error('Error fetching all movies by ID:', error);
    },
    complete: () => {
      console.log('All movies by ID fetch complete');
    }
  })
}
getAllTvById(id: number) {
  this._allCategoriesService.getTvById(id).subscribe({
    next: (data) => {
      console.log('All TV shows by ID:', data);
      this.all = data;
    },
    error: (error) => {
      console.error('Error fetching all TV shows by ID:', error);
    },
    complete: () => {
      console.log('All TV shows by ID fetch complete');
    }
  })
}
}

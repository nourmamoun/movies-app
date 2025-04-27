import { Component, OnInit } from '@angular/core';
import { AllCategoriesService } from '../../service/all-categories.service';
import { ProductItemComponent } from "../product-item/product-item.component";
import { All } from '../../interfaces/all';

@Component({
  selector: 'app-tv',
  imports: [ProductItemComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {
  tvs!: All[]
  constructor(private _allCategoriesService:AllCategoriesService){}

  ngOnInit(): void {
    this.getAllTv()
  }
  getAllTv() {
    this._allCategoriesService.getAllTv().subscribe({
      next: (data) => {
        console.log('All tv shows:', data);
        this.tvs = data.results;
      },
      error: (error) => {
        console.error('Error fetching all categories:', error);
      },
      complete: () => {
        console.log('All categories fetch complete');
      }

    })
}}

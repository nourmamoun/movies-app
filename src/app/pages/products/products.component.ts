import { Component, OnInit } from '@angular/core';
import { All } from '../../interfaces/all';
import { AllCategoriesService } from '../../service/all-categories.service';
import { ProductItemComponent } from "../product-item/product-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule,ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  allCategories!: All[]

  constructor(private _allCategoriesService:AllCategoriesService){
  }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories() {
    this._allCategoriesService.getAllCategories().subscribe({
      next: (data) => {
        console.log('All categories:', data);
        this.allCategories = data.results;
      },
      error: (error) => {
        console.error('Error fetching all categories:', error);
      },
      complete: () => {
        console.log('All categories fetch complete');
      }

    })
  }
}

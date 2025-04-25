import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AllCategoriesService } from '../service/all-categories.service';
import { All } from '../all';

@Component({
  selector: 'app-product-item',
  imports: [TitleCasePipe,UpperCasePipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() all : All = {} as All;

}

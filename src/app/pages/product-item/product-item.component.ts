import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { All } from '../../interfaces/all';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink,TitleCasePipe,UpperCasePipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() all : All = {} as All;
  

}

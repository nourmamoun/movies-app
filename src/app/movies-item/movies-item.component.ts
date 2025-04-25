import { Component, Input } from '@angular/core';
import { Movies } from '../movies';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-movies-item',
  imports: [UpperCasePipe,TitleCasePipe],
  templateUrl: './movies-item.component.html',
  styleUrl: './movies-item.component.css'
})
export class MoviesItemComponent {
@Input() movie: Movies = {} as Movies;
}

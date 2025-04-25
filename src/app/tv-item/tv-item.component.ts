import { Component, Input } from '@angular/core';
import { Tv } from '../tv';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tv-item',
  imports: [TitleCasePipe,UpperCasePipe],
  templateUrl: './tv-item.component.html',
  styleUrl: './tv-item.component.css'
})
export class TvItemComponent {
@Input() tv : Tv = {} as Tv;
}

import { Component, OnInit } from '@angular/core';
import { Tv } from '../tv';
import { AllCategoriesService } from '../service/all-categories.service';
import { TvItemComponent } from "../tv-item/tv-item.component";

@Component({
  selector: 'app-tv',
  imports: [TvItemComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {
  tvs!: Tv[]
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

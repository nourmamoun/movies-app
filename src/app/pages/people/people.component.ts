import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { AllCategoriesService } from '../../service/all-categories.service';
import { PeopleItemComponent } from "../people-item/people-item.component";

@Component({
  selector: 'app-people',
  imports: [PeopleItemComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit{
people!:Person[]
constructor(private _allCategoriesService:AllCategoriesService){}

ngOnInit(): void {
  this.getAllPeople()
}
getAllPeople() {
  this._allCategoriesService.getAllPeople().subscribe({
    next: (data) => {
      console.log('All people:', data);
      this.people = data.results;
    },
    error: (error) => {
      console.error('Error fetching all people:', error);
    },
    complete: () => {
      console.log('All people fetch complete');
    }
  })
}
}

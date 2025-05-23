import { Component, Input } from '@angular/core';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrl: './people-item.component.css'
})
export class PeopleItemComponent {
@Input() person : Person = {} as Person;
}

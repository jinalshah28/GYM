import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {

  //favoriteSeason: string;
  constructor() { }
  ngOnInit() {
    console.log("component has been initialized!")
  }
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}

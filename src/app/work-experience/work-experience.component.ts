import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  // Frontend Skills
  frontendSkills = [
    {
      name: 'AngularJS 1 | AngularJS 2',
      experience: '2 years',
    },
    {
      name: 'ReactJS',
      experience: '2 years',
    },
    {
      name: 'Ionic | Cordova',
      experience: '2 years',
    }
  ];

  // Backend Skills
  backendSkills = [
    {
      name: 'MongoDB',
      experience: '2 years',
    },
    {
      name: 'NodeJS',
      experience: '2 years',
    },
    {
      name: 'ExpressJS',
      experience: '2 years',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

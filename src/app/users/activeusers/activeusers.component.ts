import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Users=[
    {
      id:"1",
      firstname:"Adrian",
      lastname:"Sumagang",
      email:"janaidrhean@gmail.com",
      department:"Pantawid Pamilya"
    },
    {
      id:"2",
      firstname:"Tanjirou",
      lastname:"Kamado",
      email:"demonslayer@gmail.com",
      department:"Sustainable Livelihood"
    },
    {
      id:"3",
      firstname:"Senku",
      lastname:"Chan",
      email:"doctorstone@gmail.com",
      department:"Social Pension"
    },
    {
      id:"4",
      firstname:"Zenitsu",
      lastname:"Sumagang",
      email:"janaidrhean@gmail.com",
      department:"Pantawid Pamilya"
    }
  ]

}

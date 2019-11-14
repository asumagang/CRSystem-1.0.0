import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersrequests',
  templateUrl: './usersrequests.component.html',
  styleUrls: ['./usersrequests.component.css']
})
export class UsersrequestsComponent implements OnInit {

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
    },
    {
      id:"5",
      firstname:"Ishigami",
      lastname:"Senku",
      email:"janaidrhean@gmail.com",
      department:"Pantawid Pamilya"
    },
    {
      id:"6",
      firstname:"Giyu",
      lastname:"Tomioka",
      email:"waterhashira@gmail.com",
      department:"Social Pension"
    }
  ]

}

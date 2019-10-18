import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Programs=[
    {
      name:"Pantawid Pamilya",
      target:22120
    },
    {
      name:"Sustainable Livelihood",
      target:13450
    },
    {
      name:"Social Pension",
      target:120133
    },
    {
      name:"Centenarian Law Implementation",
      target:12000
    }
  ]
  
}

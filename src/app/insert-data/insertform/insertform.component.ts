import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertform',
  templateUrl: './insertform.component.html',
  styleUrls: ['./insertform.component.css']
})
export class InsertformComponent implements OnInit {

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
    },
    {
      name:"Kalahi-CIDSS-NCDDP",
      target:12000
    },
    {
      name:"Lingap sa Masa",
      target:12000
    }
  ]
}

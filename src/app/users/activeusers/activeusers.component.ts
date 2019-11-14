import { Component, OnInit } from '@angular/core';
import {
  NgbModalConfig,
  NgbModal,
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";
import { AddusersComponent } from './addusers/addusers.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {

  constructor(
    private modal: NgbModal,
    private router: Router,
  ) {

   }

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


  openaddmodal() {
    console.log("naclickl");
    this.modal.open(AddusersComponent);
  }
}

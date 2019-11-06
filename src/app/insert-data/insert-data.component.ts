import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {

  constructor(
    private toastr:ToastrService
  ) { }

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


  showSuccess(title:string){
    this.toastr.success(title);
  }
  showError(title:string){
    this.toastr.error(title);
  }
  showWarning(title:string){
    this.toastr.warning(title);
  }
  insert(){
    this.showSuccess("Data Inserted Successfully");
  }
  cancel(){
    this.showError("Data Insert Unsuccessfully");
  }

   
  // Success() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }
}

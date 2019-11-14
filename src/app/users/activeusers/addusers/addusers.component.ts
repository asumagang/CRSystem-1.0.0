import { Component, OnInit } from '@angular/core';
import {
  NgbModalConfig,
  NgbModal,
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  constructor(
    config: NgbModalConfig,
    private modalService: NgbActiveModal,
  ) { }

  ngOnInit() {
  }
  close() {
    this.modalService.close();
  }
}

import { Component, OnInit } from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }

}

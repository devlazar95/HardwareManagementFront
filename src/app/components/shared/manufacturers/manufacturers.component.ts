import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Router } from '@angular/router';
import {NgbDateStruct,  NgbModal, ModalDismissReasons, NgbDate, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.scss']
})
export class ManufacturersComponent implements OnInit {

  manufacturers: any;
  constructor(private readonly _manService: ManufacturerService, public router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.init();
  }

  async init(){
    await this._manService.getAllManufacturers().toPromise().then((res)=>{
      this.manufacturers = res;
      console.log(res);
    })
  }
  closeResult:string = '';

  addNewManufacturer(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

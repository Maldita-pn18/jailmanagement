import { Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import { ServicesService } from './../user-services/services.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { prisoner } from '../data-models/prisoner';

@Component({
  selector: 'app-view-inmate',
  templateUrl: './view-inmate.component.html',
  styleUrls: ['./view-inmate.component.css']
})
export class ViewInmateComponent implements OnInit {

  width = "20rem"

  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ViewInmateComponent>) { }

  ngOnInit() {
   
  }

  seeHistory(_id){
    this.router.navigateByUrl(`/visit_history/${_id}`)
    this.dialogRef.close('')
  }

}

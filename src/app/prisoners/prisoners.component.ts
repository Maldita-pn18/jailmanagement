import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './../user-services/services.service';
import { prisoner } from '../data-models/prisoner';
import { AddPrisonerComponent } from '../add-prisoner/add-prisoner.component'
import { ViewInmateComponent } from '../view-inmate/view-inmate.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-prisoners',
  templateUrl: './prisoners.component.html',
  styleUrls: ['./prisoners.component.css']
})
export class PrisonersComponent implements OnInit {


  show = true;

  public prisoner :prisoner[];
  @Output() editEvent = new EventEmitter();

  constructor(private router: Router, private userService: ServicesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getPrisoners().subscribe(data => {
      this.prisoner = data.data
    })
  }

  addInmate() {
    let dialogRef = this.dialog.open(AddPrisonerComponent, { data: this.prisoner });
    dialogRef.afterClosed().subscribe(updated => {
      this.prisoner.push(updated.data)
    });
    // this.show = !this.show
  }

  viewPrisoner(id) {
    const p = this.prisoner.find(inmate =>{
      return inmate._id == id
    })
    let dialogRef = this.dialog.open(ViewInmateComponent, { data: p });
    
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { visitor } from '../data-models/visitor'
import { prisoner } from '../data-models/prisoner'
import { timeout } from 'q';
import { ServicesService } from '../user-services/services.service';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent implements OnInit {

  red = "red"
  width = "27.7rem"
  public inmate: prisoner
  public visit: visitor


  constructor(private visitorInfo: FormBuilder, private userService: ServicesService) { }

  reactiveForm = this.visitorInfo.group({
    prisonername: ['', [Validators.required]],
    fullname: ['', [Validators.required]],
    address: ['', [Validators.required]],
    age: ['', [Validators.required]],
    relationship: ['', [Validators.required]],
    dateVisit: ['', [Validators.required]],
    timeIn: ['', [Validators.required]],
    timeOut: ['', [Validators.required]]
  })

  ngOnInit() {
    
  }

  onSubmit() {
    // dataPrisoner = Array<any>();
    // this.userService.getPrisoners().subscribe(data => {

    // })   
      Swal.fire(
      'Thank you!',
      'You can now visit.',
      'success'
    )
   
    this.userService.addVisitors(this.reactiveForm.value).subscribe(data => {
      console.log(data)
    })
    this.reactiveForm.reset();
  }

}
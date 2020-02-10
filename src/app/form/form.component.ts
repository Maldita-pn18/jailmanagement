import { Component, OnInit } from '@angular/core';
import { police } from '../data-models/police'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import {Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public police = new Array<police>();
  width = "16.7rem"
  red = "red"

  constructor(private fb: FormBuilder,private router : Router ) { }

  policeInfo: FormGroup = this.fb.group({
    // id: [data.id],
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  ngOnInit() {

  }

  onSubmit() {
    if(this.policeInfo.value.username == "admin" && this.policeInfo.value.password == "admin"){
      this.router.navigateByUrl('/inmates')
    }else{
      Swal.fire(
        'Please try again',
        'Invalid information.',
        'error'
      )
    }
    
  }

}

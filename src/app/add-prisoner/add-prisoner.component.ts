import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ServicesService } from '../user-services/services.service';
import Swal from 'sweetalert2';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-add-prisoner',
  templateUrl: './add-prisoner.component.html',
  styleUrls: ['./add-prisoner.component.css']
})
export class AddPrisonerComponent implements OnInit {

  @Output() backEvent = new EventEmitter();

  width = '54rem'

  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  constructor(private fb: FormBuilder, 
    private userService: ServicesService, 
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddPrisonerComponent>) { }

  prisonerInfo: FormGroup = this.fb.group({
    fullname: ['', Validators.required],
    age: ['', Validators.required],
    sex: ['', Validators.required],
    prisonerAddress: ['', Validators.required],
    height: ['', Validators.required],
    status: ['', Validators.required],
    case: ['', Validators.required],
    arrestTime: ['', Validators.required],
    dateCaptured: ['', Validators.required],
    police: ['', Validators.required],
  })


  ngOnInit() {

  }

  addPrisoner() {
    Swal.fire({
      title: 'Add?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        this.userService.addPrisoner(this.prisonerInfo.value).subscribe(data => {
          console.log(data);
          this.dialogRef.close(data)
        })
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  adminLoginRoute() {
    this.router.navigateByUrl('/login')
  }

  visitorRoute() {
    this.router.navigateByUrl('/visit')
  }

  inmatesRoute() {
    this.router.navigateByUrl('/inmates')
  }

  addPrisonRoute() {
    this.router.navigateByUrl('/addPrisoner')
  }

  visitors() {
    this.router.navigateByUrl('/visitors')
  }

  dorms() {
    this.router.navigateByUrl('/dorms')
  }

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('/login')
        Swal.fire(
          'Logged out',
          'Your are now logged out',
          'success'
        )
      }
    })
  }
}

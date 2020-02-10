import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { ServicesService } from '../user-services/services.service';
import { prisoner } from '../data-models/prisoner';

@Component({
  selector: 'app-visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.css']
})
export class VisitHistoryComponent implements OnInit {

  public prisoner : prisoner;

  constructor(private router: ActivatedRoute, private userService: ServicesService,private Router: Router) { }

  ngOnInit() {
    // const id = this.router.snapshot.params['_id']
    // this.userService.getPrisoners().subscribe(data =>{
    //   console.log("hey" , data)
    //   // this.prisonerList = data.data[id]
    // })
  }

  back(){
    this.Router.navigateByUrl('/inmates')
  }

}

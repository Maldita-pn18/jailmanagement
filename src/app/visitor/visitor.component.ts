import { Component, OnInit } from '@angular/core';
import { visitor } from '../data-models/visitor';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from './../user-services/services.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  
  public visitor: visitor[];

  constructor(private router: ActivatedRoute, private userService: ServicesService) { }

  ngOnInit() {
    this.userService.getVisitor().subscribe(data => {
      console.log(data)
      this.visitor = data.data  
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../user-services/services.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  panelOpenState = false;
  
  opened = false;

  constructor( private userService: ServicesService) { }

  ngOnInit() {
  }


}

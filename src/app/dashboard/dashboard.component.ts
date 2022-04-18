import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../services/homeservices.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  f_data:any;
  userdatas:any;
  p: number = 1;
  elseblock:any;
  id:any;
  constructor(private home:HomeservicesService){
    // this.home.getdata().subscribe(data=>this.f_data=data);
    this.home.userData().subscribe(data=>this.userdatas=data);
  }

  ngOnInit(): void {
  }

}

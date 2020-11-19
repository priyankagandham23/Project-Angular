import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
// users:string[]=["ABC","XYZ","ZXC"];
users:any[]=[
{id:101,name:'XYZ',city:'Hyd'},
{id:102,name:'ABC',city:'Pune'},
{id:103,name:'ZXC',city:'Bng'},


];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
 u3:string='UK';
month=[
  'Jan','Feb','Mar','Apr','May'
];
  constructor() { }

  ngOnInit(): void {
  }

}

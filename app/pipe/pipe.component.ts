import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
// title='batch6 and batch7';
t1="Javascript";
  constructor() { }

  ngOnInit(): void {
  }
  public date=new Date();
  public person={
Firstname:'Batch6',
Lastname:'Batch7'  };
};

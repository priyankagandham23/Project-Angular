import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { reduceEachLeadingCommentRange } from 'typescript';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
 

})
export class PortfolioComponent implements OnInit {
public Student=[];
public name="";
// public n1="text-warning";
// public n4=true;
// public n5={
//   "text-success":this.n4,
//   "text-danger":!this.n4,
//   "b1":false,
//   "msg":true
// }

  constructor(private std2:StudentService) { }

  ngOnInit(): void {
    this.Student=this.std2.getStudents();
  }
// m(){
// console.log("Hello Batch 6 and batch7");
// this.name="Welcome all";
// }
}

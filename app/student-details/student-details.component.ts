import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
   public Student=[];
  constructor(private std:StudentService) { }

  ngOnInit(): void {
    this.Student=this.std.getStudents();
  }

}

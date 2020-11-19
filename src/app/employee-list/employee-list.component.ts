import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public Emp=[];
  constructor(private e1:EmployeeService) { }

  ngOnInit(): void {
    this.Emp=this.e1.getemp();
  }

}

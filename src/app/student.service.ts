import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
getStudents(){
  return[
    {id:101,name:"Priyanka",dept:"ECE"},
      {id:102,name:"XYZ",dept:"CSE"},
     {id:103,name:"bnm",dept:"EEE"}
  ]
}
  constructor() { }
}

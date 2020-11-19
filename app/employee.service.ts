import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
getemp(){
  return [
    {"id":1,"name":"Priyanka","dept":"UI"},
    {"id":2,"name":"Nishi","dept":"Android"},
    {"id":3,"name":"Harshu","dept":"DOTNET"},
    
    
  ]
}
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { User33 } from '../user33';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userModel = new User33("Priyanka" , "Priyanka2345666");
}

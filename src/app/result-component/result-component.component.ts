import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  @Input() username ='';
  @Input() Address = '';
  @Input() Dob = '';

//  @Input() element: {username: string, Address: string, Dob: String}
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log("username received in result: "  + this.username);
  }

}

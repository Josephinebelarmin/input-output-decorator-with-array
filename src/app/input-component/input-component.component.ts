import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

 @Output() nameEmitter = new EventEmitter<string>() ;
 @Output() AddressEmitter = new EventEmitter<string>() ;
 @Output() DOBEmitter = new EventEmitter<string>() ;


 
  inputText = '';
  sendInputtoApp(text:string){
this.nameEmitter.emit(text);
this.AddressEmitter.emit(text);
this.DOBEmitter.emit(text)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

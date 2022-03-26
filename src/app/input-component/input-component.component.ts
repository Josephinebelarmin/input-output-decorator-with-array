import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css'],
})
export class InputComponentComponent implements OnInit {
  
  @Output() textChanged = new EventEmitter<string>();

  @Input() inputText = '';
  sendInputtoApp() {
      this.textChanged.emit(this.inputText);
  }
  constructor() {}

  ngOnInit(): void {}
}

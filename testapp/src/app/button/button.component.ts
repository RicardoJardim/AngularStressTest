import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  @Input() public callbackFunction: () => void;

  constructor() {}

  ngOnInit(): void {}

  onclickFunction(): void {
    this.callbackFunction();
  }
}

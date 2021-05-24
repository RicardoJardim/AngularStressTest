import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass'],
})
export class Page1Component implements OnInit {
  result = 0;
  constructor() {}

  onClickFunction = (): void => {
    this.result = 0;
    console.log(new Date());
    let result = 0;
    for (let j = 1; j <= 5; j++) {
      for (let k = 1; k <= 100000; k++) {
        result +=
          Math.log2(k) + (3 * k) / (2 * j) + Math.sqrt(k) + Math.pow(k, j - 1);
      }
    }
    console.log(new Date());
    this.result = result;
  };

  ngOnInit(): void {}
}

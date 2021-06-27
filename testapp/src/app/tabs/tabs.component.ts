import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass'],
})
export class TabsComponent implements OnInit {
  index: number = 1;

  constructor(private locat: Location, private router: Router) {}

  ngOnInit(): void {
    const path = this.locat.path().charAt(this.locat.path().length - 1);
    if (typeof path === 'number') {
      this.index = parseInt(path);
    } else {
      this.index = 1;
    }
  }

  changeRoute = (e: number): void => {
    if (e != this.index) {
      this.index = e;
      this.router.navigateByUrl('/tab' + this.index);
    }
  };
}

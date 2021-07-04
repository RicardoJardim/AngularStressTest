import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.sass'],
})
export class Page2Component implements OnInit {
  users: string;
  banks: string;
  btns: number[] = [];
  views: number[] = [];

  constructor(private httpService: HttpService) {
    this.users = '';
    this.banks = '';
  }

  ngOnInit(): void {}

  createViews = (): void => {
    console.log(new Date());
    this.btns = [];
    this.views = Array(500);
    console.log(new Date());
  };

  createBtns = (): void => {
    console.log(new Date());
    this.btns = [];
    this.btns = Array(500);
    console.log(new Date());
  };

  onClickFunction = (): void => {
    console.log(new Date());

    this.httpService.prepareDataRequest('users?size=100').subscribe((data) => {
      // Set the data to display in the template
      this.users = JSON.stringify(data);
      console.log(new Date() + ' Users');
    });

    this.httpService.prepareDataRequest('banks?size=100').subscribe((data) => {
      // Set the data to display in the template
      this.banks = JSON.stringify(data);
      console.log(new Date() + ' Banks');
    });
  };
}

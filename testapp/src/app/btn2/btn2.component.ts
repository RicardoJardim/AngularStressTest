import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-btn2',
  templateUrl: './btn2.component.html',
  styleUrls: ['./btn2.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Btn2Component implements OnInit {
  users: string;
  banks: string;
  btns: number[] = [];
  views: number[] = [];

  constructor() {
    this.users = '';
    this.banks = '';
  }

  ngOnInit(): void {}

  private prepareDataRequest(url: string): Observable<any> {
    // Define the data URL
    const dataUrl = 'https://random-data-api.com/api/' + url;
    // Prepare the request
    return null;
    //return this.http.get(dataUrl);
  }

  private onClickFunction = (args: any): void => {
    console.log(new Date());

    this.prepareDataRequest('users/random_user?size=100').subscribe((data) => {
      // Set the data to display in the template
      this.users = JSON.stringify(data);
    });
    this.prepareDataRequest('bank/random_bank?size=100').subscribe((data) => {
      // Set the data to display in the template
      this.banks = JSON.stringify(data);
    });
  };

  private createViews = (): void => {
    console.log(new Date());
    this.btns = [];
    this.views = Array(1000);
    console.log(new Date());
  };

  private createBtns = (): void => {
    console.log(new Date());
    this.btns = [];
    this.btns = Array(1000);
    console.log(new Date());
  };
}

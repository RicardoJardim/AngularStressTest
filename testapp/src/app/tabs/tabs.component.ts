import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
  theme: string = 'theme-blue';

  constructor() {}

  ngOnInit(): void {}

  setTheme(theme: string, evt) {
    if (this.theme != theme) {
      this.theme = theme;
      let color: string = '';

      switch (theme) {
        case 'theme-blue':
          color = '#0336ff';
          break;
        case 'theme-yellow':
          color = '#ffde03';
          break;
        case 'theme-red':
          color = '#ff0266';
          break;
      }
    }
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

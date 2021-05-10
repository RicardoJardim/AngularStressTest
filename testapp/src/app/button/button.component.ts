import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() name: string;

  @Input() public callbackFunction: (args: any) => void;

  constructor() {}

  ngOnInit() {}

  onclickFunction(args: any): void {
    this.callbackFunction(args);
  }
}

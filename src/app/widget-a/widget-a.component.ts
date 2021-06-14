import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-widget-a',
  templateUrl: './widget-a.component.html',
  styleUrls: ['./widget-a.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WidgetAComponent
    }
  ]
})
export class WidgetAComponent implements OnInit, Widget {
  isRefreshing = false;

  constructor() { }

  ngOnInit(): void {
  }

  load(): void {
    console.log('Load data from API');
  }

  refresh(): void {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }

}

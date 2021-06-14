import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-widget-b',
  templateUrl: './widget-b.component.html',
  styleUrls: ['./widget-b.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WidgetBComponent
    }
  ]
})
export class WidgetBComponent implements OnInit, Widget {
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
    }, 5000);
  }

}

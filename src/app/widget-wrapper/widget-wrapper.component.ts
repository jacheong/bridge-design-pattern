import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit, AfterContentInit {
  @ContentChild(WIDGET) widget: Widget;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.widget) {
      this.widget.load();
    }
  }

  onRefresh(): void {
    if (this.widget) {
      this.widget.refresh();
    }
  }

}

import { Component, ElementRef, Inject, Input, LOCALE_ID } from '@angular/core';
import { Options } from 'highcharts';
import * as Highcharts from 'highcharts/highstock';
import AnnotationsModule from 'highcharts/modules/annotations';

import {
  annotations,
  StockChartDeprecatedDataPoint,
} from './options/stock-chart-deprecated-options';

// @ts-ignore
AnnotationsModule(Highcharts);

@Component({
  selector: 'kirby-stock-chart-deprecated',
  template: '',
  styleUrls: ['./stock-chart-deprecated.component.scss'],
})
export class StockChartDeprecatedComponent {
  chartContainer: ElementRef;
  private _data: StockChartDeprecatedDataPoint[];
  @Input() set data(val: StockChartDeprecatedDataPoint[]) {
    this.onDataChanges(val);
  }
  get data() {
    return this._data;
  }
  private _options: Options;
  @Input() set options(val: Options) {
    this.onOptionsChanges(val);
  }
  get options() {
    return this._options;
  }
  private _height = 300;
  @Input() set height(height: number) {
    this._height = height;
    if (this.chart) {
      this.chart.setSize(null, height);
    }
  }
  get height() {
    return this._height;
  }
  @Input() description = '';
  @Input() showDataLabels = true;

  chart: Highcharts.Chart;

  constructor(hostElement: ElementRef, @Inject(LOCALE_ID) private locale: string) {
    this.chartContainer = hostElement;
  }

  onOptionsChanges(options: Options) {
    this._options = options;
    this.chart = Highcharts.stockChart(this.chartContainer.nativeElement, this._options);
  }

  onDataChanges(data: StockChartDeprecatedDataPoint[]) {
    this._data = data;

    if (this.chart != null) {
      // First delete all points in the previous series.
      this.chart.update(
        {
          series: [],
        },
        false,
        true
      );
      // Remove the annotations.
      this.chart.removeAnnotation('minmax');
      // Then update the chart with new series data.
      this.chart.update(
        {
          series: [
            {
              type: 'area',
              data: data,
            },
          ],
        },
        false,
        true
      );
      // Add the new annotations.
      this.chart.addAnnotation(annotations(this.locale), false);
      // And finally redraw the graph with all the changes.
      this.chart.redraw();
    }
  }
}

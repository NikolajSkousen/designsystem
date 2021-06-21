import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChartOptions } from 'chart.js';

import { ChartJSService } from './chart-js/chart-js.service';
import { ChartData, ChartType } from './chart-wip.types';

@Component({
  selector: 'kirby-chart-wip',
  templateUrl: './chart-wip.component.html',
  styleUrls: ['./chart-wip.component.scss'],
  providers: [ChartJSService],
})
export class ChartWipComponent implements AfterViewInit, OnChanges {
  @Input() type: ChartType = ChartType.bar;
  @Input() data: ChartData;
  @Input() dataLabels: string[];
  @Input() options: ChartOptions;

  @ViewChild('chartCanvas')
  canvasElement: ElementRef<HTMLCanvasElement>;

  constructor(private chartJSService: ChartJSService) {}

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    let shouldRedrawChart = false;

    const keyUpdateFnPairs = {
      data: () => this.updateData(),
      dataLabels: () => this.updateDataLabels(),
      type: () => this.updateType(),
      options: () => this.updateOptions(),
    };

    Object.entries(simpleChanges).forEach(([key]) => {
      if (simpleChanges[key].firstChange) return;
      shouldRedrawChart = true;
      keyUpdateFnPairs[key]();
    });

    if (shouldRedrawChart) this.redrawChart();
  }

  private renderChart() {
    this.chartJSService.renderChart(
      this.canvasElement,
      this.type,
      this.data,
      this.dataLabels,
      this.options
    );
  }

  private updateData() {
    this.chartJSService.updateData(this.data);
  }

  private updateDataLabels() {
    this.chartJSService.updateDataLabels(this.dataLabels);
  }

  private updateType() {
    this.chartJSService.updateType(this.type, this.options);
  }

  private updateOptions() {
    this.chartJSService.updateOptions(this.options, this.type);
  }

  private redrawChart() {
    this.chartJSService.redrawChart();
  }
}

import { Component } from '@angular/core';

const config = {
  selector: 'cookbook-chart-deprecated-example-donut',
  template: `<kirby-card>
  <kirby-card-header title="Donut"></kirby-card-header>
    <kirby-chart-deprecated
      [height]="320"
      type="donut"
      [showDataLabels]="true"
      description="Accessibility description goes here"
      [data]="[
      {
        name: 'Boomerangs 25%',
        y: 25,
        label: '25%'
      },
      {
        name: 'Bubbles 41%',
        y: 41,
        label: '41%'
      },
      {
        name: 'Jumping 33%',
        y: 33,
        label: '33%'
      },
      {
        name: 'Christmas < 1%',
        y: 1,
        label: '< 1%'
      }
      ]"
    >
    </kirby-chart-deprecated>
</kirby-card>`,
};
@Component({
  selector: config.selector,
  template: config.template,
})
export class ChartDeprecatedExampleDonutComponent {
  template = config.template;
}

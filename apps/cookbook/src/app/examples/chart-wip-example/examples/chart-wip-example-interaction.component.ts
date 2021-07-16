import { Component } from '@angular/core';
import { ActiveElement, Chart, ChartEvent } from 'chart.js';

import { ChartHighlightedElements, ChartOptions } from '@kirbydesign/designsystem';

const config = {
  selector: 'cookbook-chart-wip-example-interaction',
  template: `<p>{{_text}}</p>
<kirby-chart 
  type="column" 
  [data]="[7, 12, 5, 9, 3]" 
  [dataLabels]="_dataLabels" 
  [customOptions]="_customOptions"
  [highlightedElements]="_highlighted"
></kirby-chart>`,
  codeSnippet: `_text = 'Nothing has been clicked';
_dataLabels = ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday'];
_highlighted: ChartHighlightedElements;

_customOptions: ChartOptions = {
  onClick: (_event: ChartEvent, activeElements: ActiveElement[], _chart: Chart) => {
    const activeElement = activeElements[0];
    if (activeElement) {
      // Highlight clicked element
      this._highlighted = [[activeElement.datasetIndex, activeElement.index]];

      // Change text
      const activeElementLabel = this._dataLabels[activeElement.index];
      this._text = \`\${activeElementLabel} was clicked\`;
    } else {
      this._text = 'The background was clicked';
      this._highlighted = [];
    }
  },
};
  `,
};

@Component({
  selector: config.selector,
  template: config.template,
})
export class ChartWipExampleInteractionComponent {
  template: string = config.template;
  codeSnippet: string = config.codeSnippet;

  _text: string = 'Nothing has been clicked';
  _dataLabels = ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday'];
  _highlighted: ChartHighlightedElements;

  _customOptions: ChartOptions = {
    onClick: (_event: ChartEvent, activeElements: ActiveElement[], _chart: Chart) => {
      const activeElement = activeElements[0];
      if (activeElement) {
        // Highlight clicked element
        this._highlighted = [[activeElement.datasetIndex, activeElement.index]];

        // Change text
        const activeElementLabel = this._dataLabels[activeElement.index];
        this._text = `${activeElementLabel} was clicked`;
      } else {
        this._text = 'The background was clicked';
        this._highlighted = [];
      }
    },
  };
}

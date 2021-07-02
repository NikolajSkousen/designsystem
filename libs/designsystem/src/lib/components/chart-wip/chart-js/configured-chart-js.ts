import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import { CHART_GLOBAL_DEFAULTS } from '../chart-wip.configs';
import { deepMergeObjects } from '../utils';

const CHART_SCALES = [CategoryScale, LinearScale];
const CHART_ELEMENTS = [BarElement, LineElement, PointElement];
const CHART_CONTROLLERS = [BarController, LineController];
const CHART_PLUGINS = [annotationPlugin];

/* Order matters; defaults must be merged after register as 
   register modifies the Chart.defaults objects */
Chart.register(Legend, ...CHART_SCALES, ...CHART_ELEMENTS, ...CHART_CONTROLLERS, ...CHART_PLUGINS);

/* Chart.defaults is read only; set each key modified in 
   CHART_GLOBAL_DEFAULTS manually */
const mergedDefaults = deepMergeObjects(Chart.defaults, CHART_GLOBAL_DEFAULTS) as any;
Object.entries(CHART_GLOBAL_DEFAULTS).forEach(([key]) => {
  Chart.defaults[key] = mergedDefaults[key];
});

export { Chart };

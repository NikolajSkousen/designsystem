import { ChartTypeRegistry, Color, Point, TooltipItem, TooltipLabelStyle } from 'chart.js';
import { Context } from 'chartjs-plugin-datalabels';
import { Align } from 'chartjs-plugin-datalabels/types/options';

import { ColorHelper, DesignTokenHelper } from '../../../helpers';
import { ChartTypesConfig } from '../chart.types';

const { fontSize } = DesignTokenHelper;
const { getThemeColorHexString, getThemeColorRgbString } = ColorHelper;

/**
 * A filter to read a chartpoint from a Chart.js point context (used for chartdata points). Context is provided by Chart.js.
 */
const getChartPointFromContext = (context: Context): Point => {
  return context.dataset.data[context.dataIndex] as Point;
};

export const CHART_TYPES_CONFIG: ChartTypesConfig = {
  bar: {
    type: 'bar',
    options: {
      datasets: {
        bar: {
          barPercentage: 0.6,
        },
        line: {
          spanGaps: true,
        },
      },
      indexAxis: 'y',
      scales: {
        y: {
          grid: {
            drawBorder: false,
          },
          ticks: {
            font: {
              size: parseInt(fontSize('s')),
            },
          },
        },
      },
      elements: {
        point: {
          radius: 0,
        },
        line: {
          borderColor: getThemeColorHexString('medium'),
        },
      },
    },
  },
  column: {
    type: 'bar',
    options: {
      datasets: {
        bar: {
          barPercentage: 0.6,
        },
        line: {
          spanGaps: true,
        },
      },
      indexAxis: 'x',
      scales: {
        x: {
          grid: {
            drawBorder: false,
          },
          ticks: {
            font: {
              size: parseInt(fontSize('xs')),
            },
          },
        },
      },
      elements: {
        line: {
          tension: 0.2,
          borderColor: getThemeColorHexString('medium'),
        },
        point: {
          radius: 0,
        },
      },
    },
  },
  line: {
    type: 'line',
    options: {
      backgroundColor: getThemeColorRgbString('semi-light', 0.5),
      scales: {
        x: {
          grid: {
            borderColor: getThemeColorHexString('medium'),
            borderWidth: 1,
          },
          ticks: {
            font: {
              size: parseInt(fontSize('xs')),
            },
          },
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  },
  stock: {
    type: 'line',
    options: {
      // locale is overridden in handleLocalization().
      locale: 'en-US',
      responsive: true,
      animation: {
        duration: 0,
      },
      layout: {
        padding: {
          left: 0,
          right: 10,
          top: 30,
          bottom: 0,
        },
      },
      backgroundColor: getThemeColorRgbString('semi-light', 0.5),
      scales: {
        x: {
          type: 'time',
          // Time is overridden in handleLocalization().
          time: {},
          grid: {
            lineWidth: 0,
          },
          ticks: {
            maxRotation: 0,
            source: 'data',
            autoSkipPadding: 40,
            font: {
              size: parseInt(fontSize('xs')),
            },
          },
        },
        y: {
          position: 'right',
          display: true,
          grid: {
            drawBorder: false,
          },
          ticks: {
            display: true,
            font: {
              size: parseInt(fontSize('xs')),
            },
          },
        },
      },
      elements: {
        line: {
          tension: 0, // Smooth curve (0 = no smoothing)
          borderWidth: 2,
        },
        point: {
          hitRadius: 20,
          radius: 0,
          hoverRadius: 0,
          hoverBorderWidth: 0,
        },
      },
      normalized: true,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
          caretSize: 1,
          callbacks: {
            labelColor: (tooltipItem: TooltipItem<keyof ChartTypeRegistry>) => {
              return {
                backgroundColor: tooltipItem.dataset.borderColor,
                borderColor: tooltipItem.dataset.borderColor,
                borderWidth: 0,
              } as TooltipLabelStyle;
            },
          },
        },
        crosshair: {
          line: {
            color: 'red',
          },
          sync: {
            enabled: false,
          },
        },

        datalabels: {
          backgroundColor: (context: Context) => context.dataset.borderColor as Color,
          color: getThemeColorHexString('white'),
          borderRadius: 3,
          font: {
            lineHeight: 1,
            size: parseInt(fontSize('xs')),
          },
          padding: {
            top: 6,
            left: 5,
            right: 5,
            bottom: 5,
          },
          offset: 5,
          align: (context: Context): Align =>
            (getChartPointFromContext(context) as any)?.datalabel.position,
          display: (context: Context): boolean =>
            !!(getChartPointFromContext(context) as any)?.datalabel,
          formatter: (value: any): string => value.datalabel.value,
        },
      },
    },
  },
};

declare module 'react-plotly.js' {
  import * as Plotly from 'plotly.js';
  import * as React from 'react';

  interface PlotParams {
    data: Plotly.Data[];
    layout?: Partial<Plotly.Layout>;
    frames?: Plotly.Frame[];
    config?: Partial<Plotly.Config>;
    useResizeHandler?: boolean;
    style?: React.CSSProperties;
    className?: string;
    onInitialized?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
    onUpdate?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
    onPurge?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
    onError?: (err: Error) => void;
    onRedraw?: () => void;
    onRestyle?: (data: any) => void;
    onRelayout?: (layout: any) => void;
    onClickAnnotation?: (event: Plotly.ClickAnnotationEvent) => void;
    onLegendClick?: (event: Plotly.LegendClickEvent) => boolean;
    onLegendDoubleClick?: (event: Plotly.LegendClickEvent) => boolean;
    onSliderChange?: (event: Plotly.SliderChangeEvent) => void;
    onSliderEnd?: (event: Plotly.SliderEndEvent) => void;
    onSliderStart?: (event: Plotly.SliderStartEvent) => void;
    onAfterExport?: () => void;
    onAfterPlot?: () => void;
    onAnimated?: () => void;
    onAnimationInterrupted?: () => void;
    onAutoSize?: () => void;
    onBeforeExport?: () => void;
    onButtonClicked?: (event: Plotly.ButtonClickedEvent) => void;
    onClick?: (event: Plotly.PlotMouseEvent) => void;
    onDeselect?: () => void;
    onDoubleClick?: () => void;
    onHover?: (event: Plotly.PlotMouseEvent) => void;
    onUnhover?: (event: Plotly.PlotMouseEvent) => void;
    onSelected?: (event: Plotly.PlotSelectionEvent) => void;
  }

  class Plot extends React.Component<PlotParams> {}
  export default Plot;
} 
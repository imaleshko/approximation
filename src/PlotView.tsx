import PlotlyModule from "react-plotly.js";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plot = (PlotlyModule as any).default;

import type { Point } from "@/types.ts";

interface PlotViewProps {
  points: Point[];
  linePoints: Point[];
  method: string;
}

export const PlotView = ({ points, linePoints, method }: PlotViewProps) => {
  return (
    <Plot
      data={[
        {
          x: points.map((p) => p.x),
          y: points.map((p) => p.y),
          type: "scatter",
          mode: "markers",
          name: "Точки",
          marker: { size: 10 },
        },
        ...(method === "lagrange" || method === "both"
          ? [
              {
                x: linePoints.map((p) => p.x),
                y: linePoints.map((p) => p.y),
                type: "scatter",
                mode: "lines",
                name: "Метод Лагранжа",
              },
            ]
          : []),
      ]}
      layout={{
        autosize: true,
      }}
      style={{ width: "100%", height: "100%" }}
      useResizeHandler={true}
    />
  );
};

import type { Point } from "@/types.ts";
import { lagrange } from "@/calculations/lagrange.ts";

export const generateLagrangeLine = (
  points: Point[],
  numPoints = 100,
): Point[] => {
  const minX = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.x));
  const step = (maxX - minX) / (numPoints - 1);

  const curve: Point[] = [];
  for (let i = 0; i < numPoints; i++) {
    const x = minX + i * step;
    curve.push({ x, y: lagrange(points, x) });
  }
  return curve;
};

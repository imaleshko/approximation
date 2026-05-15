import type { Point } from "@/types.ts";

export const lagrange = (points: Point[], x: number) => {
  let y = 0;

  for (let i = 0; i < points.length; i++) {
    let li = 1;
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        li *= (x - points[j].x) / (points[i].x - points[j].x);
      }
    }
    y += points[i].y * li;
  }

  return y;
};

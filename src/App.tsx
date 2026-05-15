import styles from "./App.module.css";
import { useMemo, useState } from "react";
import type { Methods, Point } from "@/types.ts";
import { generateLagrangeLine } from "@/math.ts";
import { PlotView } from "./PlotView.tsx";

type Variant = "5" | "10" | "20";

const DATA_SETS: Record<Variant, Point[]> = {
  "5": [
    { x: -1, y: 10.0 },
    { x: 0, y: 5.0 },
    { x: 1, y: 2.5 },
    { x: 2, y: 1.2 },
    { x: 3, y: 0.6 },
  ],
  "10": [
    { x: -2, y: 5 },
    { x: -1.5, y: 3.5 },
    { x: -1, y: 2.1 },
    { x: -0.5, y: 1.2 },
    { x: 0, y: 0.5 },
    { x: 0.5, y: 0.2 },
    { x: 1, y: 0.1 },
    { x: 1.5, y: 0.3 },
  ],
  "20": [
    { x: 0, y: 10 },
    { x: 0.5, y: 9.5 },
    { x: 1, y: 8.9 },
    { x: 1.5, y: 8.2 },
    { x: 2, y: 7.4 },
    { x: 2.5, y: 6.5 },
    { x: 3, y: 5.5 },
    { x: 3.5, y: 4.5 },
    { x: 4, y: 3.6 },
    { x: 4.5, y: 2.8 },
    { x: 5, y: 2.1 },
    { x: 5.5, y: 1.6 },
    { x: 6, y: 1.3 },
    { x: 6.5, y: 1.1 },
    { x: 7, y: 1.0 },
    { x: 7.5, y: 1.2 },
    { x: 8, y: 1.5 },
    { x: 8.5, y: 2.0 },
    { x: 9, y: 2.7 },
    { x: 9.5, y: 3.5 },
  ],
};

export const App = () => {
  const [variant, setVariant] = useState<Variant>("5");
  const [method, setMethod] = useState<Methods>("lagrange");

  const points = DATA_SETS[variant];
  const curvePoints = useMemo(() => generateLagrangeLine(points), [points]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Апроксимація та інтерполяція</h1>

      <div className={styles.topSection}>
        <div className={styles.optionsSection}>
          <label className={styles.label}>Оберіть варіант</label>

          <div className={styles.options}>
            <button
              onClick={() => setVariant("5")}
              className={`${styles.button} ${variant === "5" ? styles.activeButton : ""}`}
            >
              5 точок
            </button>

            <button
              onClick={() => setVariant("10")}
              className={`${styles.button} ${variant === "10" ? styles.activeButton : ""}`}
            >
              10 точок
            </button>

            <button
              onClick={() => setVariant("20")}
              className={`${styles.button} ${variant === "20" ? styles.activeButton : ""}`}
            >
              20 точок
            </button>
          </div>
        </div>

        <div className={styles.optionsSection}>
          <label className={styles.label}>Оберіть метод</label>

          <div className={styles.options}>
            <button
              onClick={() => setMethod("lagrange")}
              className={`${styles.button} ${method === "lagrange" ? styles.activeButton : ""}`}
            >
              Метод Лагранжа
            </button>

            <button
              onClick={() => setMethod("mnc")}
              className={`${styles.button} ${method === "mnc" ? styles.activeButton : ""}`}
            >
              МНК
            </button>

            <button
              onClick={() => setMethod("both")}
              className={`${styles.button} ${method === "both" ? styles.activeButton : ""}`}
            >
              Обидва
            </button>
          </div>
        </div>
      </div>

      <div className={styles.plot}>
        <PlotView points={points} linePoints={curvePoints} method={method} />
      </div>
    </div>
  );
};

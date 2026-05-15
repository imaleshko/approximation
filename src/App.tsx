import styles from "./App.module.css";
import { useState } from "react";

type Variant = "5" | "10" | "20";
type Method = "lagrange" | "mnc" | "both";

export const App = () => {
  const [variant, setVariant] = useState<Variant>("5");
  const [method, setMethod] = useState<"lagrange" | "mnc" | "both">("lagrange");

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
    </div>
  );
};

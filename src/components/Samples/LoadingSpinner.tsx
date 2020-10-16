import * as React from "react";
import styles from "./LoadingSpinner.module.scss";

const edgeScale = 1.15;
const trackRadius = 50;
const dotRadius = 7;
const numDots = 7;
const numDivisions = 18;
const PI = Math.PI;
const dotArray = Array.from({ length: numDots }).map((_, i) => i);

export const LoadingSpinner: React.FC<{ color?: string }> = ({
  color = "black",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-${edgeScale * trackRadius} -${edgeScale * trackRadius} ${
        2 * edgeScale * trackRadius
      } ${2 * edgeScale * trackRadius}`}
      width="100%"
      className={styles.spinner}
    >
      {dotArray.map((i) => {
        const cx = trackRadius * Math.cos((i * 2 * Math.PI) / numDivisions);
        const cy = -trackRadius * Math.sin((i * 2 * Math.PI) / numDivisions);
        return (
          <circle
            v-for="i in numDots"
            key={i}
            cx={cx}
            cy={cy}
            r={dotRadius}
            fill={color}
            className={styles.circle}
          />
        );
      })}
    </svg>
  );
};

import * as React from "react";
import styles from "./LoadingBlocks.module.scss";

const squareWidth = 10;
const gap = 3;
const colors = ["#51D6FF", "#8D9EC6", "#A06B9A"];
const size = 2 * squareWidth + gap;

export const LoadingBlocks: React.FC = () => (
  <svg
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    className={styles.svg}
  >
    {colors.map((color, i) => (
      <rect
        key={i}
        cx={squareWidth / 2}
        cy={squareWidth / 2}
        width={squareWidth}
        height={squareWidth}
        fill={color}
        rx={squareWidth / 10}
        className={styles.rect}
      />
    ))}
  </svg>
);

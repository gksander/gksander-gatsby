import * as React from "react";
import { motion } from "framer-motion";

const squareWidth = 10;
const gap = 3;
const maxX = squareWidth + gap;
const colors = ["#51D6FF", "#8D9EC6", "#A06B9A"];
const size = 2 * squareWidth + gap;

export const LoadingBlocks: React.FC = () => (
  <svg
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
  >
    {colors.map((color, i) => (
      <motion.rect
        key={i}
        x={0}
        y={0}
        width={squareWidth}
        height={squareWidth}
        fill={color}
        rx={squareWidth / 10}
        animate={{
          x: [0, maxX, maxX, 0, 0],
          y: [0, 0, maxX, maxX, 0],
        }}
        transition={{
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          duration: 2,
          delay: i * 0.65,
        }}
      />
    ))}
  </svg>
);

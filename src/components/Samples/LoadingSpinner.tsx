import * as React from "react";
import { motion } from "framer-motion";

const edgeScale = 1.15;
const trackRadius = 50;
const dotRadius = 7;
const numDots = 7;
const numDivisions = 18;
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
    >
      {dotArray.map((i) => {
        const cx = trackRadius * Math.cos((i * 2 * Math.PI) / numDivisions);
        const cy = -trackRadius * Math.sin((i * 2 * Math.PI) / numDivisions);
        return (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={dotRadius}
            fill={color}
            style={{
              originX: `0px`,
              originY: `0px`,
            }}
            animate={{
              rotate: [0, 360, 360],
            }}
            transition={{
              times: [0, 0.85, 1],
              repeat: Infinity,
              duration: 2,
              delay: 0.063 * i,
            }}
          />
        );
      })}
    </svg>
  );
};

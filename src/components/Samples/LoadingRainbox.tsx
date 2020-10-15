import * as React from "react";
import { motion } from "framer-motion";

const W = 130;
const circleR = 13;
const trackR = 40;
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
const numColors = colors.length;
const $2PI = 2 * Math.PI;

export const LoadingRainbox: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 2) % numColors);
    }, 1200);

    return () => clearInterval(interval);
  }, [currentIndex, setCurrentIndex]);

  const cx = trackR * Math.cos((currentIndex / numColors) * $2PI);
  const cy = -trackR * Math.sin((currentIndex / numColors) * $2PI);
  const stroke = colors[currentIndex];

  return (
    <svg
      viewBox={`-${W / 2} -${W / 2} ${W} ${W}`}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {colors.map((color, i) => {
          const cx = trackR * Math.cos((i / numColors) * $2PI);
          const cy = -trackR * Math.sin((i / numColors) * $2PI);
          return (
            <circle cx={cx} cy={cy} fill={color} r={circleR} key={color} />
          );
        })}
        {/* Highlight ring */}
        <motion.circle
          initial={false}
          animate={{ cx, cy, stroke }}
          transition={{ ease: "backOut", duration: 0.3 }}
          r={circleR * 1.3}
          strokeWidth={circleR / 5}
          fill="transparent"
        />
      </motion.g>
    </svg>
  );
};

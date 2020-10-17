import * as React from "react";

export const Spacer: React.FC<{ size?: "sm" | "base" | "lg" }> = ({
  size = "base",
}) => {
  return (
    <div
      className={
        {
          sm: "h-12",
          base: "h-16",
          lg: "h-24",
        }[size]
      }
    />
  );
};

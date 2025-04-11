"use client";
import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color = "#000",
  className = "",
}) => {
  return (
    <div
      className={`inline-block animate-spin ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid ${color}`,
        borderTopColor: "transparent",
      }}
      role="status"
      aria-label="Loading"
    />
  );
};

export default Spinner;

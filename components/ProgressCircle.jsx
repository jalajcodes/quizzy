import React, { useEffect, useRef } from "react";

export default function ProgressCircle({ current = 1, max = 5 }) {
  const pathRef = useRef();
  useEffect(() => {
    const totalLength = pathRef.current.getTotalLength();
    const prog = (totalLength / 100) * (current / max) * 100;
    pathRef.current.setAttribute("stroke-dasharray", prog + "," + totalLength);
  }, [pathRef, current, max]);

  return (
    <div
      style={{
        position: "relative",
        height: "130px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        height="130"
        viewBox="200 50 100 100"
        style={{ position: "absolute" }}
      >
        <g id="second">
          <circle r="50" cx="250" cy="100" fill="#fff" />
          <path
            fill="none"
            strokeLinecap="round"
            strokeWidth="7"
            stroke="#F3F4FA"
            strokeDasharray="250,250"
            d="M250 60 A1 1 0 0 1 250 140
       A1 1 0 0 1 250 60"
          />
          <path
            ref={pathRef}
            fill="none"
            strokeLinecap="round"
            strokeWidth="7"
            stroke="#44B77B"
            strokeDasharray="125,250"
            d="M250 60 A1 1 0 0 1 250 140
       A1 1 0 0 1 250 60"
          />
        </g>
      </svg>
      <div style={{ position: "absolute" }}>
        <span style={{ fontSize: "40px", fontWeight: "bold" }}>{current}</span>
        <span
          style={{ fontSize: "18px", color: "#999999", fontWeight: "bold" }}
        >
          /
        </span>
        <span
          style={{ fontSize: "18px", color: "#999999", fontWeight: "bold" }}
        >
          {max}
        </span>
      </div>
    </div>
  );
}

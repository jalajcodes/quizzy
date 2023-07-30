import React, { useEffect, useRef } from "react";

export default function ResultProgressCircle({ current, max }) {
  const arrowRef = useRef();
  useEffect(() => {
    const rotation = (180 / max) * current;
    arrowRef.current.style.transform = `rotate(${rotation}deg)`;
  }, [current, max]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width="200"
        height="205"
        viewBox="0 0 500 505"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.3029 357.379L250.059 250L464.716 357.342C480.895 325.042 490 288.584 490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250C10 288.599 19.1122 325.07 35.3029 357.379Z"
          fill="#EBEDF5"
        />
        <path
          d="M490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250"
          stroke="url(#paint0_linear_42_19)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          style={{ transformOrigin: "50% 50%" }}
          id="progMove"
          ref={arrowRef}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.6354 252.764C32.6687 252.476 32.0043 251.59 32 250.581V250.581C31.9957 249.573 32.6525 248.681 33.6167 248.385L250.21 182.005L250.783 317.339L33.6354 252.764Z"
          fill="#1E1E28"
        />
        <g opacity="0.0414109" filter="url(#filter0_f_42_19)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M250 450C338.366 450 410 378.366 410 290C410 201.634 338.366 130 250 130C161.634 130 90 201.634 90 290C90 378.366 161.634 450 250 450Z"
            fill="black"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250 410C338.366 410 410 338.366 410 250C410 161.634 338.366 90 250 90C161.634 90 90 161.634 90 250C90 338.366 161.634 410 250 410Z"
          fill="white"
        />
        <path
          d="M389 250C389 326.768 326.768 389 250 389C173.232 389 111 326.768 111 250C111 173.232 173.232 111 250 111C326.768 111 389 173.232 389 250Z"
          stroke="#EBEDF5"
          strokeWidth="2"
        />
        <defs>
          <filter
            id="filter0_f_42_19"
            x="35.6344"
            y="75.6344"
            width="428.731"
            height="428.731"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="27.1828"
              result="effect1_foregroundBlur_42_19"
            />
          </filter>
          <linearGradient
            id="paint0_linear_42_19"
            x1="490"
            y1="10"
            x2="10"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#44B77B" />
            <stop offset="0.479043" stopColor="#FFD033" />
            <stop offset="1" stopColor="#FF3B3F" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ position: "absolute" }}>
        <span style={{ fontSize: "35px", fontWeight: "bold" }}>
          {Math.floor((current / max) * 100)}%
        </span>
      </div>
    </div>
  );
}

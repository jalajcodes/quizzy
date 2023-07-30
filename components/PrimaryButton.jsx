import React from "react";
import { Primary } from "../styles/global.styled";

export default function PrimaryButton({ text, onClick, disabled = false }) {
  return (
    <Primary onClick={onClick} disabled={disabled}>
      {text}
    </Primary>
  );
}

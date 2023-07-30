import react from "react";
import { ResultCountStyled } from "../styles/report.styled";
export default function ResultCount({ correct, noOfQuestions }) {
  const styles = {
    checkStyles: {
      height: "30px",
      width: "30px",
    },
  };
  return (
    <ResultCountStyled correct={correct}>
      <span
        style={{
          ...styles.checkStyles,
          border: "3px solid #DFE0E5",
          borderRadius: "50%",
          display: "inline-block",
          marginLeft: "1rem",
          background: `${correct ? "#44B77B" : "#FF3B3F"}`,
        }}
      ></span>
      <span style={{ marginLeft: "1rem", fontWeight: "bold" }}>
        {noOfQuestions}
      </span>
      <p style={{ marginLeft: "0.5rem" }}>
        {correct ? "Correct" : "Incorrect"}
      </p>
    </ResultCountStyled>
  );
}

import QuizContext from "../context/QuizProvider";
import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Confetti from "../images/confetti.svg";
import GreenCheck from "../images/green-check.svg";
import Image from "next/image";
import {
  OptionRoot,
  OptionsContainer,
  QuestionRoot,
} from "../styles/question.styled";
import ProgressCircle from "../components/ProgressCircle";
import Router from "next/router";
import axios from "axios";
const styles = {
  checkStyles: {
    height: "30px",
    width: "30px",
  },
};

export default function Question() {
  const { questions, userResponse, setUserResponse, quizId } =
    useContext(QuizContext);
  const [questionNo, setQuestionNo] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [chosenAnswer, setChosenAnswer] = useState("");

  useEffect(() => {
    if (questions == undefined || questions.length == 0) {
      //questions is undefined means the user has most probably refreshed the page
      console.log("user reloaded: need to fetch stored data");
      return;
    }
    setStartTime(Date.now());
    setChosenAnswer("");
  }, [questionNo, questions]);

  useEffect(() => {
    setDisabled(!chosenAnswer);
  }, [chosenAnswer]);

  const onChange = (option) => {
    setChosenAnswer(option);
  };

  const onSubmit = async () => {
    if (disabled) return;
    const timeTaken = (Date.now() - startTime) / 1000;
    const newUserResponse = [...userResponse];
    newUserResponse.push({
      questionNo,
      chosenAnswerForServer: chosenAnswer,
      timeTaken,
    });
    try {
      await axios.post(`api/${quizId}/questions`, {
        questionNo,
        chosenAnswerForServer: chosenAnswer,
        timeTaken,
      });
    } catch (err) {
      console.log(err.message);
    }
    setUserResponse(newUserResponse);
    if (questionNo == questions.length - 1) {
      //LAST QUESTION: SEND API REQUENT TO END QUIZ
      try {
        await axios.post(`api/${quizId}/endquiz`);
      } catch (err) {
        console.log(err.message);
      }
      //LAST QUESTION: CHANGE TO REPORT SCREEN
      Router.push("/report");
      return;
    }

    setQuestionNo((ques) => ques + 1);
  };

  if (questions == undefined || questions.length == 0) {
    return <p>Go back to home and start the quiz again please.</p>;
  }

  return (
    <QuestionRoot>
      <Image
        style={{
          position: "absolute",
          width: "100%",
          height: "auto",
          top: "-6%",
        }}
        src={Confetti}
        alt="confetti"
      ></Image>
      <div
        style={{ position: "absolute", zIndex: "2", left: "50%", top: "7.5%" }}
      >
        <ProgressCircle
          current={questionNo + 1}
          max={questions.length}
        ></ProgressCircle>
      </div>
      <OptionsContainer>
        <div
          style={{
            overflow: "hidden scrolL",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "5rem",
          }}
        >
          <p style={{ fontWeight: "bold", margin: "0" }}>
            {questions[questionNo].question}
          </p>
          {questions[questionNo].options.map((option, index) => (
            <OptionRoot
              key={index}
              check={chosenAnswer === option}
              onClick={() => onChange(option)}
            >
              {chosenAnswer === option ? (
                <Image
                  style={{ ...styles.checkStyles, marginLeft: "1rem" }}
                  src={GreenCheck}
                  alt="green-check"
                />
              ) : (
                <span
                  style={{
                    ...styles.checkStyles,
                    border: "3px solid #DFE0E5",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginLeft: "1rem",
                  }}
                ></span>
              )}
              <p style={{ marginLeft: "1rem" }}>{option}</p>
            </OptionRoot>
          ))}
          <PrimaryButton
            text="Next"
            onClick={onSubmit}
            disabled={disabled}
          ></PrimaryButton>
        </div>
      </OptionsContainer>
    </QuestionRoot>
  );
}

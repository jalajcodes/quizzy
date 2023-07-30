import QuizContext from "../context/QuizProvider";
import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import GreenCheck from "../images/green-check.svg";
import Confetti from "../images/confetti.svg";
import Image from "next/image";
import {
  OptionRoot,
  OptionsContainer,
  QuestionRoot,
} from "../styles/question.styled";
import ResultProgressCircle from "../components/ResultProgressCircle";
import ResultCount from "../components/ResultCount";
import Router from "next/router";
export default function Question() {
  const { userResponse, questions } = useContext(QuizContext);
  const [correctAnswers, setCorrectAnswers] = useState(-1);

  useEffect(() => {
    const correct = questions.filter((ques, index) =>
      userResponse[index].chosenAnswersForServer.includes(ques.correctAnswer)
    ).length;
    setCorrectAnswers(correct);
  }, [userResponse, questions]);

  const onSubmit = async () => {
    Router.push("/");
  };

  if (
    userResponse == undefined ||
    userResponse.length == 0 ||
    correctAnswers == -1
  ) {
    //we reach here if the user refreshes the page on the url /report
    //in other words the user doesn't follow the required route of going through the welcome page
    //then the questions page and then here
    //so we can fetch data on demand from the server to render this page
    //but since i'm not storing any data in any database i'm just returning a simple p tag
    return <p>Fetching</p>;
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
      <OptionsContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Your result</h2>
          <ResultProgressCircle
            current={correctAnswers}
            max={questions.length}
          ></ResultProgressCircle>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <ResultCount
            correct={true}
            noOfQuestions={correctAnswers}
          ></ResultCount>
          <ResultCount
            correct={false}
            noOfQuestions={questions.length - correctAnswers}
          ></ResultCount>

          <PrimaryButton text="Start Again" onClick={onSubmit}></PrimaryButton>
        </div>
      </OptionsContainer>
    </QuestionRoot>
  );
}

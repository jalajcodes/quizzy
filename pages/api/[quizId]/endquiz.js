import { validate as uuidValidate } from "uuid";

export default function handler(req, res) {
  const reqType = req.method;
  const { quizId } = req.query;

  if (!uuidValidate(quizId)) {
    res.status(401).json({ error: "Please specify valid quizId" });
    return;
  }
  switch (reqType) {
    case "POST":
      console.log("quiz ended");
      res.status(200).json({ message: "Quiz Ended" });
      break;
  }
}

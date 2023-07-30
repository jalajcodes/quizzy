import { v4 as uuidv4 } from "uuid";

export default function handler(req, res) {
  res.status(200).json({ quizId: uuidv4() });
}

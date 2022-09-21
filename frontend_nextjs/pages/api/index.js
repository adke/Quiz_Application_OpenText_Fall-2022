import { quiz } from "../../data/quiz"

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(quiz)
    } else if (req.method === 'POST') {
        const comment = req.body.quiz
        const newQuiz = {
            text: quiz
        }
        quiz.push(newQuiz)
        res.status(201).json(newQuiz)
    }
  }
  
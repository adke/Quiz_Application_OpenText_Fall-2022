import { quiz } from "../../data/quiz"


export default function quizAdd(req, res) {
    
    if (req.method === 'POST') {
      const reqNewQuiz = req?.body;

        console.log('Req NewQuiz: ', reqNewQuiz);

        res.json({ msg: 'Submitted'});  
    }
    
    return res.status(500).json({
        msg: "This should be a POST request" 
    })
  }
  
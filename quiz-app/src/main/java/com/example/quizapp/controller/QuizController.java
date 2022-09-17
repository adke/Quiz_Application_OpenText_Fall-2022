package com.example.quizapp.controller;

import com.example.quizapp.dto.NewQuizRequest;
import com.example.quizapp.entity.Quiz;
import com.example.quizapp.repository.AnswerRepository;
import com.example.quizapp.repository.QuestionRepository;
import com.example.quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/quizzes")
public class QuizController {
    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AnswerRepository answerRepository;

    @PostMapping("/createNewQuiz")
    public Quiz createNewQuiz(@RequestBody NewQuizRequest request) {
        return quizRepository.save(request.getQuiz());
    }
    @GetMapping("/getAllQuiz")
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }





//    private final QuizService quizService;
//    @Autowired
//    public QuizController(QuizService quizService){
//        this.quizService = quizService;
//    }
//    @GetMapping
//    public List<Quiz> getQuizzes() {
//        return quizService.getQuizzes();
//    }
//    @GetMapping(path = "/{id}")
//    public Quiz getQuiz(@PathVariable String id) {
//        return quizService.getQuiz(id);
//    }
//    //ResponseEntity is how spring boot represents http response
//    //Type is flexible
//    @PostMapping
//    public ResponseEntity<String> newQuiz() {
//        return quizService.newQuiz();
//    }
//    @PutMapping(path = "/{id}")
//    public ResponseEntity<String> editQuiz(@PathVariable String id) {
//        return quizService.editQuiz(id);
//    }
//    @DeleteMapping(path = "/{id}")
//    public ResponseEntity<String> deleteQuiz(@PathVariable String id) {
//        return quizService.deleteQuiz(id);
//    }
}

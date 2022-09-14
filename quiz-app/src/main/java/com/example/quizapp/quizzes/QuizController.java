package com.example.quizapp.quizzes;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/quizzes")
public class QuizController {

    private  final QuizService quizService;

    public QuizController(QuizService quizService){
        this.quizService = quizService;
    }

    @GetMapping
    public List<Quiz> getQuizzes() {
        return quizService.getQuizzes();
    }

    @GetMapping(path = "/{id}")
    public Quiz getQuiz(@PathVariable String id) {
        return quizService.getQuiz(id);
    }

    //ResponseEntity is how spring boot represents http response
    //Type is flexible
    @PostMapping
    public ResponseEntity<String> newQuiz() {
        return quizService.newQuiz();
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<String> editQuiz(@PathVariable String id) {
        return quizService.editQuiz(id);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable String id) {
        return quizService.deleteQuiz(id);
    }
}

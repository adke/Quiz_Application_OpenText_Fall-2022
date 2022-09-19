package com.example.quizapp.controller;

import com.example.quizapp.dto.NewQuizRequest;
import com.example.quizapp.entity.Quiz;
import com.example.quizapp.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/quizzes")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @PostMapping("/createNewQuiz")
    public Quiz createNewQuiz(@RequestBody NewQuizRequest request) {
        return quizService.createNewQuiz(request);
    }
    @GetMapping("/getAllQuiz")
    public List<Quiz> getAllQuiz() {
        return quizService.getAllQuiz();
    }

    @GetMapping(path = "/{id}")
    public Quiz getQuiz(@PathVariable String id) {
        return quizService.getQuiz(id);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable String id) {
        return quizService.deleteQuiz(id);
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

}

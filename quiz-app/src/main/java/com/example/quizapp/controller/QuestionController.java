package com.example.quizapp.controller;

import com.example.quizapp.entity.Question;
import com.example.quizapp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/questions")
public class QuestionController {

    @Autowired
    public QuestionService questionService;

    @PostMapping("/newQuestion/{quizId}")
    public Question newQuestion(@PathVariable Long quizId, @RequestBody Question request) {
        return questionService.newQuestion(quizId, request);
    }

    @GetMapping(path = "/{id}")
    public Optional<Question> getQuestion(@PathVariable Long id) {
        return questionService.getQuestion(id);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteQuestion(@PathVariable Long id) {
        questionService.deleteQuestion(id);
    }
}

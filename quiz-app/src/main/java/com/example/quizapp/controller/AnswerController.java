package com.example.quizapp.controller;

import com.example.quizapp.entity.Answer;
import com.example.quizapp.entity.Question;
import com.example.quizapp.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/answers")
public class AnswerController {

    @Autowired
    public AnswerService answerService;

    @PostMapping("/newAnswer/{questionId}")
    public Answer newAnswer(@PathVariable Long questionId, @RequestBody Question request) {
        return answerService.newAnswer(questionId, request);
    }

    @GetMapping(path = "/{id}")
    public Optional<Answer> getAnswer(@PathVariable Long id) {
        return answerService.getAnswer(id);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteAnswer(@PathVariable Long id) {
        answerService.deleteAnswer(id);
    }
}

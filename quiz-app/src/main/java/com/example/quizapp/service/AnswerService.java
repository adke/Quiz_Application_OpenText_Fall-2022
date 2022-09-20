package com.example.quizapp.service;

import com.example.quizapp.dto.NewQuizRequest;
import com.example.quizapp.entity.Answer;
import com.example.quizapp.entity.Question;
import com.example.quizapp.entity.Quiz;
import com.example.quizapp.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    public Answer newAnswer(Long questionId, Question request) {
        return null;
    }

    public Optional<Answer> getAnswer(Long id) {
        return null;
    }

    public void deleteAnswer(Long id) {
    }
}

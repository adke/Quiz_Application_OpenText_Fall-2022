package com.example.quizapp.service;

import com.example.quizapp.entity.Question;
import com.example.quizapp.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public Question newQuestion(Long quizId, Question request) {

        return null;
    }

    public Optional<Question> getQuestion(Long id) {
        return null;
    }

    public void deleteQuestion(Long id) {
    }

}

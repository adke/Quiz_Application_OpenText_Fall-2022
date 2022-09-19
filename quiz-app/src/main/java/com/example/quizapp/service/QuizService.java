package com.example.quizapp.service;

import com.example.quizapp.dto.NewQuizRequest;
import com.example.quizapp.entity.Quiz;
import com.example.quizapp.repository.AnswerRepository;
import com.example.quizapp.repository.QuestionRepository;
import com.example.quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class QuizService {
    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AnswerRepository answerRepository;

    public Quiz createNewQuiz(NewQuizRequest request) {
        return quizRepository.save(request.getQuiz());
    }

    public List<Quiz> getAllQuiz() {
        return null;
    }

    public Quiz getQuiz(String id) {
        return null;
    }

    public ResponseEntity<String> deleteQuiz(String id) {
        return null;
    }
}

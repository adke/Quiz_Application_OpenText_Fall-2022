package com.example.quizapp.service;

import com.example.quizapp.dto.NewQuizRequest;
import com.example.quizapp.entity.Quiz;
import com.example.quizapp.repository.AnswerRepository;
import com.example.quizapp.repository.QuestionRepository;
import com.example.quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public Quiz createNewQuiz(NewQuizRequest request) {
        return quizRepository.save(request.getQuiz());
    }

    public List<Quiz> getAllQuiz() {
        return quizRepository.findAll();
    }

    public Optional<Quiz> getQuiz(Long id) {
        return quizRepository.findById(id);
    }

    public void deleteQuiz(Long id) {
        quizRepository.deleteById(id);
    }
}

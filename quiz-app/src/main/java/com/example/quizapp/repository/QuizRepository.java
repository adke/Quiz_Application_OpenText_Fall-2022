package com.example.quizapp.repository;

import com.example.quizapp.dto.QuizInfoResponse;
import com.example.quizapp.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    @Query("SELECT new com.example.quizapp.dto.QuizInfoResponse(q.quizID, q.quizName, q.subject) FROM Quiz q")
    public List<QuizInfoResponse> getQuizInformation();
}

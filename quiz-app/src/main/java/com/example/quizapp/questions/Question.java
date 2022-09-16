package com.example.quizapp.questions;

import com.example.quizapp.answers.Answer;
import com.example.quizapp.quizzes.Quiz;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Question {
    @Id
    @GeneratedValue
    private Long questionID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quizID")
    private Quiz quiz;

    private String content;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
    private List<Answer> answers;

    private Long correctAnswerID;
}

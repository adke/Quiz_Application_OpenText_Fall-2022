package com.example.quizapp.questions;

import com.example.quizapp.answers.Answers;
import com.example.quizapp.quizzes.Quiz;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Questions {
    @Id
    @GeneratedValue
    private Long questionID;

    @ManyToOne
    @JoinColumn(name = "quizID")
    private Quiz quiz;

    private String content;

    @OneToMany
    @JoinColumn(name =  "questionID")
    private List<Answers> answers;

    private Long correctAnswerID;
}

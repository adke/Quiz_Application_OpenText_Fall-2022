package com.example.quizapp.quizzes;

import com.example.quizapp.questions.Questions;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Quiz {
    @Id
    @GeneratedValue
    private Long quizID;
    private String quizName;
    private String subject;

    @OneToMany
    @JoinColumn(name = "quizID")
    private List<Questions> questions;

    public Quiz(String quizName, String subject) {
        this.quizName = quizName;
        this.subject = subject;
    }

}



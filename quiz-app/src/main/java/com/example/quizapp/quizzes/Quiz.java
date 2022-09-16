package com.example.quizapp.quizzes;

import com.example.quizapp.questions.Question;
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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "quiz")
    private List<Question> questions;

    public Quiz(String quizName, String subject) {
        this.quizName = quizName;
        this.subject = subject;
    }

}



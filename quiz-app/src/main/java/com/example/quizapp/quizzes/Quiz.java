package com.example.quizapp.quizzes;

import com.example.quizapp.questions.Question;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity(name = "Quiz")
public class Quiz {
    @Id
    //@SequenceGenerator and @GeneratedValue is use for generate a big serial integer for id
    @SequenceGenerator(name = "quiz_sequence", sequenceName = "quiz_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "quiz_sequence")
    @Column(
            name = "quiz_id",
            updatable = false
    )
    private Long quizID;
    @Column(
            name = "quiz_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String quizName;
    @Column(
            name = "subject",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String subject;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "quiz")
    private List<Question> questions;

    public Quiz(String quizName, String subject) {
        this.quizName = quizName;
        this.subject = subject;
    }

}



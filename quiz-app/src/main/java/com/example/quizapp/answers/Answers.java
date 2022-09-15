package com.example.quizapp.answers;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Answers {
    @Id
    @GeneratedValue
    private Long answerID;

    @ManyToOne
    @JoinColumn(name = "questionID")
    private Long quizID;

    private String content;
}

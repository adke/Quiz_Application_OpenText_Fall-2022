package com.example.quizapp.answers;

import com.example.quizapp.questions.Question;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Answer {
    @Id
    @GeneratedValue
    private Long answerID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "questionID")
    private Question question;

    private String content;
}

package com.example.quizapp.questions;

import com.example.quizapp.answers.Answer;
import com.example.quizapp.quizzes.Quiz;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity(name = "Question")
public class Question {
    @Id
    //@SequenceGenerator and @GeneratedValue is use for generate a big serial integer for id
    @SequenceGenerator(name = "question_sequence", sequenceName = "question_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question_sequence")
    @Column(
            name = "question_id",
            updatable = false
    )
    private Long questionID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quizID")
    private Quiz quiz;

    @Column(
            name = "question_content",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String content;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
    private List<Answer> answers;

    @Column(
            name = "correct_answer_id"
            //nullable = false
    )
    private Long correctAnswerID;

    public Question(Quiz quiz, String content){
        this.quiz = quiz;
        this.content = content;
    }
}

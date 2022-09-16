package com.example.quizapp.answers;

import com.example.quizapp.questions.Question;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Answer {
    //@Id Sets answerID to be the primary key of the table
    @Id
    //@SequenceGenerator and @GeneratedValue is use for generate a big serial integer for id
    @SequenceGenerator(name = "answer_sequence", sequenceName = "answer_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "answer_sequence")
    //@Column specifies properties for the column
    //name specifies the name of the field in the database
    //updatable specifies if this field can be updated
    @Column(
            name = "answer_id",
            updatable = false
    )
    private Long answerID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "questionID")
    private Question question;

    //@nullable sets if this field can be null
    //TEXT
    @Column(
            name = "answer_content",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String content;
}

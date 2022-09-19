package com.example.quizapp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name = "Answer")
@Table(
        name = "answer"
)
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

    @Column(
            name = "answer_content",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String content;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
}

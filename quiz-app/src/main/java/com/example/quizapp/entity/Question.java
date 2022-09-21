package com.example.quizapp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name = "Question")
@Table(
        name = "question")
public class Question {
    @Id
    @SequenceGenerator(name = "question_sequence", sequenceName = "question_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question_sequence")
    @Column(
            name = "question_id",
            updatable = false
    )
    private Long questionID;
    @Column(
            name = "question_content",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String questionContent;

//    @ManyToOne
//    @JoinColumn(name = "quiz_id")
//    private Quiz quiz;

    @OneToMany(targetEntity = Answer.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="question_id",referencedColumnName = "question_id")
    //@OneToMany(mappedBy = "question")
    private List<Answer> answers;
}

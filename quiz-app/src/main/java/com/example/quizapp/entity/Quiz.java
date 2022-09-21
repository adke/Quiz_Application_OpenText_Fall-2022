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
@Entity(name = "Quiz")
@Table(
        name = "quiz"
)
public class Quiz {
    @Id
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

    @OneToMany(targetEntity = Question.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="quiz_id",referencedColumnName = "quiz_id")
   // @OneToMany(mappedBy = "quiz")
    private List<Question> questions;


}



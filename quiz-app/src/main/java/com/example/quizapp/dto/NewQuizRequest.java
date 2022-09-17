package com.example.quizapp.dto;

import com.example.quizapp.entity.Quiz;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class NewQuizRequest {
    private Quiz quiz;
}

package com.example.quizapp;

import com.example.quizapp.questions.Question;
import com.example.quizapp.questions.QuestionRepository;
import com.example.quizapp.quizzes.Quiz;
import com.example.quizapp.quizzes.QuizRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class QuizAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizAppApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(
			QuizRepository quizRepository,
			QuestionRepository questionRepository){
		return args -> {
			Quiz test = new Quiz("test", "misc");
			test = quizRepository.save(test);
			Question quest = new Question(test, "aaaa");
			questionRepository.save(quest);
		};
	}

}

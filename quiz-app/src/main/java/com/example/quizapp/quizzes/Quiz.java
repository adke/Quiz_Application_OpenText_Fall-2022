package com.example.quizapp.quizzes;

public class Quiz {
    private String quizName;
    private Long quizID;
    private String subject;

    public Quiz(String quizName, Long quizID, String subject) {
        this.quizName = quizName;
        this.quizID = quizID;
        this.subject = subject;
    }

    public String getQuizName() {
        return quizName;
    }

    public void setQuizName(String quizName) {
        this.quizName = quizName;
    }

    public Long getQuizID() {
        return quizID;
    }

    public void setQuizID(Long quizID) {
        this.quizID = quizID;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

}



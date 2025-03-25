package com.Piano.Controller;


import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Piano.Service.QuizService;
import com.Piano.model.Quiz;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping("/note")
    public Map<String, String> getRandomNote() {
        return Map.of("note", quizService.getRandomNote());
    }

    @PostMapping("/submit")
    public String submitAnswer(@RequestBody Quiz quiz) {
        boolean correct = quizService.checkAnswerAndReward(quiz);
        return correct ? "정답! 포인트 지급됨" : "오답입니다.";
    }
}
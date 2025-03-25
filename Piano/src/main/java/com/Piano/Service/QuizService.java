package com.Piano.Service;

import com.Piano.repository.QuizMapper;
import com.Piano.model.PointHistory;
import com.Piano.model.Quiz;
import com.Piano.model.UserPlant;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuizMapper quizMapper;

    private static final List<String> NOTE_POOL = List.of(
            "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
            "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5"
    );

    public String getRandomNote() {
        int idx = new Random().nextInt(NOTE_POOL.size());
        return NOTE_POOL.get(idx);
    }

    public boolean checkAnswerAndReward(Quiz quiz) {
        if (!quiz.getQuestionNote().equalsIgnoreCase(quiz.getUserAnswer())) {
            return false;
        }

        int reward = 10;
        Long userId = quiz.getUserId();

        // 포인트 내역 저장
        PointHistory history = new PointHistory();
        history.setSenderId(null);
        history.setReceiverId(userId);
        history.setPoints(reward);
        history.setReason("음 퀴즈 정답");
        history.setCreatedAt(LocalDateTime.now());
        quizMapper.insertPointHistory(history);

        // 유저 식물 포인트 업데이트
        UserPlant plant = quizMapper.findPlantByUserId(userId);
        if (plant == null) {
            plant = new UserPlant();
            plant.setUserId(userId);
            plant.setCurrentPoints(reward);
            plant.setTotalPoints(reward);
            quizMapper.insertPlant(plant);
        } else {
            plant.setCurrentPoints(plant.getCurrentPoints() + reward);
            plant.setTotalPoints(plant.getTotalPoints() + reward);
            quizMapper.updatePlant(plant);
        }

        return true;
    }
}

package com.Piano.model;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class PointHistory {
    private Long pointId;
    private Long senderId;   // null 가능
    private Long receiverId;
    private int points;
    private String reason;
    private LocalDateTime createdAt = LocalDateTime.now();
}
package com.Piano.model;

import lombok.Data;

@Data
public class UserPlant {
    private Long userId;
    private int currentPoints;
    private int totalPoints;
}

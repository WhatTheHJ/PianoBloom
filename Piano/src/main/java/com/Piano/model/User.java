package com.Piano.model;

import lombok.Data;

@Data
public class User {
    private String username;
    private String password;
    private String email;
    private String nickname;
}

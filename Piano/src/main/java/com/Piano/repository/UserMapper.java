package com.Piano.repository;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.Piano.model.User;

@Mapper
public interface UserMapper {
	
	@Insert("INSERT INTO users (username, password, nickname)"
			+ "VALUES (#{userName}, #{password}, #{nickname}")
	void UserSignup(User newuser);
	
}
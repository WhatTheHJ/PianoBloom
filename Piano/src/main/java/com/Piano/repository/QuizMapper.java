package com.Piano.repository;

import com.Piano.model.PointHistory;
import com.Piano.model.UserPlant;
import org.apache.ibatis.annotations.*;

@Mapper
public interface QuizMapper {

    @Select("SELECT * FROM user_plants WHERE user_id = #{userId}")
    UserPlant findPlantByUserId(Long userId);

    @Insert("INSERT INTO user_plants(user_id, current_points, total_points) VALUES(#{userId}, #{currentPoints}, #{totalPoints})")
    void insertPlant(UserPlant plant);

    @Update("UPDATE user_plants SET current_points = #{currentPoints}, total_points = #{totalPoints} WHERE user_id = #{userId}")
    void updatePlant(UserPlant plant);

    @Insert("INSERT INTO point_history(sender_id, receiver_id, points, reason, created_at) " +
            "VALUES(#{senderId}, #{receiverId}, #{points}, #{reason}, #{createdAt})")
    void insertPointHistory(PointHistory history);
}
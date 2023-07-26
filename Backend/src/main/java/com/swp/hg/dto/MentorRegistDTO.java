package com.swp.hg.dto;

import com.swp.hg.entity.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MentorRegistDTO {
        private int registID;
        private int status;
        private int userId;
        private LocalDateTime date;
}

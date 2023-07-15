package com.swp.hg.dto;

import lombok.Data;

@Data
public class StatsDTO {
    int totalSkills;
    int totalActiveSkills;
    int totalActiveUsers;
    int totalMentor;
    int totalMentee;
    int totalRequest;
    int totalPendingRequest;
    int totalProgressRequest;
    int totalDeniedRequest;
    int totalFinishedRequest;
}

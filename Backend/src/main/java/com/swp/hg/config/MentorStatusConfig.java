package com.swp.hg.config;

public enum MentorStatusConfig {
    ACCEPT(0), PENDING(1), REJECT(2), CLOSED(3);
    private final int value;

    MentorStatusConfig(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
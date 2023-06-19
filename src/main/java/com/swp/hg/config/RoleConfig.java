package com.swp.hg.config;

public enum RoleConfig {
    GUEST(-1),ADMIN(0), USER(2), MENTOR(3);
    private final int value;
    RoleConfig(int value) {
        this.value = value;
    }
    public int getValue() {
        return value;
    }
}

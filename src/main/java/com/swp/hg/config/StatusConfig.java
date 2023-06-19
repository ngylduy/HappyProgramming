package com.swp.hg.config;

public enum StatusConfig {
    ACTIVE(true),NOACTIVE(false);
    private final boolean value;
    StatusConfig(boolean value) {
        this.value = value;
    }
    public boolean getValue() {
        return value;
    }
}

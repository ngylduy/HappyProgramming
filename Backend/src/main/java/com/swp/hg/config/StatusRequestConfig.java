package com.swp.hg.config;

public enum StatusRequestConfig {
    OPEN(0), PROCESSING(1), CANCEL(2), CLOSED(3),FAILED(-1);
    private final int value;
    StatusRequestConfig(int value) {
        this.value = value;
    }
    public int getValue() {
        return value;
    }
}

package com.swp.hg.response;

public class RegisterMessage {
    String message;

    boolean isSuccess;

    public boolean isSuccess() {
        return isSuccess;
    }

    public void setSuccess(boolean success) {
        isSuccess = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public RegisterMessage(String message,boolean isSuccess) {
        this.message = message;
        this.isSuccess = isSuccess;
    }
}

package com.swp.hg.response;

public class UpdateMenteeMessage {
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

    public UpdateMenteeMessage(String message,boolean isSuccess) {
        this.message = message;
        this.isSuccess = isSuccess;
    }
}

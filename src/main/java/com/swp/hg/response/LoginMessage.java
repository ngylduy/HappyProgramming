package com.swp.hg.response;

public class LoginMessage {
    String message;
    int id;
    boolean isSuccess;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isSuccess() {
        return isSuccess;
    }

    public void setSuccess(boolean success) {
        isSuccess = success;
    }

    public LoginMessage(String message, int id, boolean isSuccess) {
        this.message = message;
        this.id = id;
        this.isSuccess = isSuccess;
    }

}


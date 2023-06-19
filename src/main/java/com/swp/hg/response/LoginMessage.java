package com.swp.hg.response;

public class LoginMessage {
    String message;
    int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LoginMessage(String message, int id) {
        this.message = message;
        this.id = id;
    }

}


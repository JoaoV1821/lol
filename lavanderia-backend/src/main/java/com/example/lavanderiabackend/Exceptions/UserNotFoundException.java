package com.example.lavanderiabackend.Exceptions;

public class UserNotFoundException extends RuntimeException {
    
    public UserNotFoundException(String message){
        super(message);
    }
}

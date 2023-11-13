package com.example.lavanderiabackend.Exceptions;

public class AlreadyExistsException extends RuntimeException {

    public AlreadyExistsException(String message) {
        super(message);
    }

}

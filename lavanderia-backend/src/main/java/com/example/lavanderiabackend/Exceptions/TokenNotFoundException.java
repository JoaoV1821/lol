package com.example.lavanderiabackend.Exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TokenNotFoundException extends RuntimeException {

    private String secondaryMessage;

    public TokenNotFoundException(String message) {
        super(message);
    }
}

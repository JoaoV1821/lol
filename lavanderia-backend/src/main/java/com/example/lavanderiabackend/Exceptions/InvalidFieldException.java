package com.example.lavanderiabackend.Exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvalidFieldException extends RuntimeException{
    
    private String field;

    public InvalidFieldException(String message,String field){
        super(message);
        this.field = field;
    }

}

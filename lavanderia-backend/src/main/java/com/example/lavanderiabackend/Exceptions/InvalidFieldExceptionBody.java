package com.example.lavanderiabackend.Exceptions;

import java.time.Instant;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class InvalidFieldExceptionBody extends ExceptionBody {
    
    private String field;

    public InvalidFieldExceptionBody(Instant timestamp , Integer status,String error, String message,String path,String field){
        super(timestamp, status, error, message, path);
        this.field = field;
    }
}

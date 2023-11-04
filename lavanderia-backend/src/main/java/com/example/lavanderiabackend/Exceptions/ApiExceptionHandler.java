package com.example.lavanderiabackend.Exceptions;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import javax.naming.AuthenticationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.bind.annotation.ExceptionHandler;



@RestController
@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ExceptionBody> userNotFound(UserNotFoundException exception , WebRequest request){
        
        ExceptionBody body = new ExceptionBody(
            Instant.now(),
            HttpStatus.NOT_FOUND.value(),"Item não encontrado",
            exception.getMessage(),
            request.getContextPath()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
    }

    @ExceptionHandler(InvalidFieldException.class)
    public ResponseEntity<ExceptionBody> fieldNotValid(InvalidFieldException exception, WebRequest request){

         InvalidFieldExceptionBody body = new InvalidFieldExceptionBody(
            Instant.now(),
            HttpStatus.BAD_REQUEST.value(),"Campo inválido",
            exception.getMessage(),
            request.getContextPath(),
            exception.getField()
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,String>> argumentNotValid(MethodArgumentNotValidException exception,WebRequest request){
        Map<String,String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error)->{
            String fieldName = ((FieldError) error ).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName,errorMessage);
        });
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ExceptionBody> AuthenticationException(Exception exception){
        ExceptionBody body = new ExceptionBody(Instant.now(),HttpStatus.UNAUTHORIZED.value(),"Requisição não permitida",
        "Não autorizado","/");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED.value()).body(body);
    }
    
}

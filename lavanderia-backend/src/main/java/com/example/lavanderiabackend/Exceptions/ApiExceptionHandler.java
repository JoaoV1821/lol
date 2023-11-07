package com.example.lavanderiabackend.Exceptions;

import java.nio.file.AccessDeniedException;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import javax.naming.AuthenticationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
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
    public ResponseEntity<ExceptionBody> userNotFound(UserNotFoundException exception, WebRequest request) {

        ExceptionBody body = new ExceptionBody(
                Instant.now(),
                HttpStatus.UNAUTHORIZED.value(), "Não Autorizado",
                exception.getMessage(),
                request.getContextPath());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
    }

    @ExceptionHandler(InvalidFieldException.class)
    public ResponseEntity<ExceptionBody> fieldNotValid(InvalidFieldException exception, WebRequest request) {

        InvalidFieldExceptionBody body = new InvalidFieldExceptionBody(
                Instant.now(),
                HttpStatus.BAD_REQUEST.value(), "Campo inválido",
                exception.getMessage(),
                request.getContextPath(),
                exception.getField());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> argumentNotValid(MethodArgumentNotValidException exception,
            WebRequest request) {
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ExceptionBody> authenticationException(Exception exception) {
        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.UNAUTHORIZED.value(), "Unauthorized",
                "Usuário não authorizado!", "");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
    }

    @ExceptionHandler({ AccountStatusException.class })
    public ResponseEntity<ExceptionBody> abnormalAccountException() {
        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.UNAUTHORIZED.value(), "Unauthorized",
                "Conta inválida ou desativada!", "");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ExceptionBody> AuthenticationException(AuthenticationException exception) {
        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.UNAUTHORIZED.value(),
                "Requisição não permitida",
                "Não autorizado", "/");
        // return ResponseEntity.status(HttpStatus.UNAUTHORIZED.value()).body(body);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
    }

    @ExceptionHandler(InsufficientAuthenticationException.class)
    public ResponseEntity<ExceptionBody> insufficientAuthenticationException(
            InsufficientAuthenticationException exception) {
        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.UNAUTHORIZED.value(), "Unauthorized",
                "Authenticação insuficiente", "");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
    }

    @ExceptionHandler(TokenNotFoundException.class)
    public ResponseEntity<ExceptionBody> tokenNotFound(TokenNotFoundException exception) {
        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.UNAUTHORIZED.value(), "Unauthorized",
                exception.getMessage(), "");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<Integer> hi() {
        return ResponseEntity.ok().body(200);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ExceptionBody> userAlreadyExists(UserAlreadyExistsException exception) {
        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.INTERNAL_SERVER_ERROR.value(), "Conflito",
                exception.getMessage(), "");
        return ResponseEntity.badRequest().body(body);
    }

    @ExceptionHandler(AlreadyExistsException.class)
    public ResponseEntity<ExceptionBody> alreadyExists(AlreadyExistsException exception) {
        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.CONFLICT.value(), "Duplicate",
                exception.getMessage(), "");
        return ResponseEntity.status(HttpStatus.CONFLICT).body(body);
    }

    // @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionBody> internalErrorException(Exception exception) {

        ExceptionBody body = new ExceptionBody(Instant.now(), HttpStatus.INTERNAL_SERVER_ERROR.value(), "Erro interno",
                "Erro interno no servidor", "");
        return ResponseEntity.internalServerError().body(body);
    }

}

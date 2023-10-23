package com.example.lavanderiabackend.models.Validacao;

public class EmailValidator {
    public static boolean isEmailValid(String email){
        
        if (email == null || email.isEmpty()) {
            return false;
        }
        email = email.replaceAll("[^a-zA-Z0-9.@_-]", "");
        if(!email.matches(".*@.*\\..*")){
            return false;
        }
        return true;
    }
}
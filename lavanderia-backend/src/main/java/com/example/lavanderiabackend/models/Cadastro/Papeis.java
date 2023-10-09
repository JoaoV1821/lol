package com.example.lavanderiabackend.models.Cadastro;

public enum Papeis  {
    ADMIN("admin"),
    USER("user");
    
    private String papel;

    Papeis(String papel){
        this.papel = papel;
    }
    public String getPapel(){
        return this.papel;
    }
}

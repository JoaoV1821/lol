package com.example.lavanderiabackend.models.Cadastro;

public enum Papel  {
    ADMIN("admin"),
    USER("user");
    
    private String papel;

    Papel(String papel){
        this.papel = papel;
    }
    public String getPapel(){
        return this.papel;
    }
}

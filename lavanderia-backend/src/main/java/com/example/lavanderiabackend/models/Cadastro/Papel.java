package com.example.lavanderiabackend.models.Cadastro;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Papel {
    ADMIN("admin"),
    USER("cliente"),
    FUNCIONARIO("funcionario");

    private String papel;

    @JsonCreator
    Papel(String papel) {
        this.papel = papel;
    }

    @JsonValue
    public String getPapel() {
        return this.papel;
    }
}

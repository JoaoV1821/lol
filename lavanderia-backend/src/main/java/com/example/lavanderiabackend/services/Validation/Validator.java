package com.example.lavanderiabackend.services.Validation;

import com.example.lavanderiabackend.Exceptions.InvalidFieldException;
import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;

public class Validator {

    public static void validateCadastro(CadastroDTO modelo) {
        if (!CPFValidator.isCpfValid(modelo.getCpf()))
            throw new InvalidFieldException("Campo Cpf inválido!", "cpf");
        if (!EmailValidator.isEmailValid(modelo.getEmail()))
            throw new InvalidFieldException("Campo Email inválido!", "email");
    }

}

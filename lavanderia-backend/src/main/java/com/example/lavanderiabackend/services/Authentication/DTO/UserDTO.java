package com.example.lavanderiabackend.services.Authentication.DTO;


import com.example.lavanderiabackend.models.Endereco.DTO.EnderecoModelo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDTO {

    private String nome;
    private String cpf; 
    private String telefone;
    private String email;
    private EnderecoModelo endereco;
}

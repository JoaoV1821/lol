package com.example.lavanderiabackend.models.Cadastro.DTO;

import com.example.lavanderiabackend.models.Cadastro.Papel;
import com.example.lavanderiabackend.models.Endereco.DTO.EnderecoModelo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CadastroModelo {

    private String cpf; 
    private String nome;
    private String sobrenome;
    private String email;
    private EnderecoModelo endereco;
    private String telefone;
    private Papel papel;
}

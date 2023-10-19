package com.example.lavanderiabackend.models.Cadastro.DTO;

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

    private String cpf; // tamanho , cpf vaildo
    private String nome;
    private String sobrenome;
    private String email; // login 
    private EnderecoModelo endereco;
    private String telefone;
}

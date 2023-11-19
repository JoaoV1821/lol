package com.example.lavanderiabackend.models.Cadastro.DTO;

import java.time.LocalDate;

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
public class CadastroDTO {

    private String cpf;
    private String nome;
    private String email;
    private String senha;
    private EnderecoModelo endereco;
    private String telefone;
    private Papel perfil;
    private LocalDate dataNasc;
}

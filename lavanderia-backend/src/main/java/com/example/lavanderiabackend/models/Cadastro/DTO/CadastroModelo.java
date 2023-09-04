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

    public String cpf;
    public String nome;
    public String sobrenome;
    public String email;
    public EnderecoModelo endereco;
    public String telefone;
}

package com.example.lavanderiabackend.Cadastro.DTO;

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
    public String email;
    public String endereço;
    public String numero;
    public String complemento;
    public String cidade;
    public String cep;
    public String telefone;
}

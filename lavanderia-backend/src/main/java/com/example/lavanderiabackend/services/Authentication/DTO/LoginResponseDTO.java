package com.example.lavanderiabackend.services.Authentication.DTO;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTO {

    private Long id;
    private String nome;
    private String login;
    private String senha;
    private String perfil;
    
    public LoginResponseDTO(Cadastro cadastro){
        this.id = cadastro.getCadastroId();
        this.nome = cadastro.getNome() + cadastro.getSobrenome();
        this.login = cadastro.getEmail();
        this.senha = cadastro.getSenha();
        this.perfil = cadastro.getPapel().getPapel();
    }

}

package com.example.lavanderiabackend.Cadastro;

import com.example.lavanderiabackend.Cadastro.DTO.CadastroModelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cadastro {
    @Id
    @SequenceGenerator(name = "cadastro_sequence", sequenceName = "cadastro_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cadastro_sequence")
    public Long cadastroId;
    @Column(unique = true, nullable = false)
    public String cpf;
    @Column(nullable = false)
    public String nome;
    @Column(unique = true, nullable = false)
    public String email;
    @Column(nullable = false)
    public String senha;
    public String cep;
    public String endereço;
    public String numero;
    public String complemento;
    public String cidade;
    public String telefone;

    public Cadastro(CadastroModelo modelo) {
        this.cpf = modelo.cpf;
        this.cep = modelo.cep;
        this.cidade = modelo.cidade;
        this.complemento = modelo.complemento;
        this.email = modelo.email;
        this.numero = modelo.numero;
        this.telefone = modelo.telefone;
        this.nome = modelo.nome;
        this.endereço = modelo.endereço;
    }
}

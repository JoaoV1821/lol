package com.example.lavanderiabackend.models.Cadastro;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroModelo;
import com.example.lavanderiabackend.models.Endereco.Endereco;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
    public String sobrenome;
    @Column(unique = true, nullable = false)
    public String email;
    @Column(nullable = false)
    public String senha;
    @ManyToOne
    @JoinColumn(name = "endereco_id", nullable = false)
    public Endereco endereco;
    public String telefone;

    public Cadastro(CadastroModelo modelo) {
        this.cpf = modelo.cpf;
        this.email = modelo.email;
        this.telefone = modelo.telefone;
        this.nome = modelo.nome;
        this.sobrenome = modelo.sobrenome;
    }
}

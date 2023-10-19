package com.example.lavanderiabackend.models.Endereco;

import java.util.ArrayList;
import java.util.List;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Endereco {
    @Id
    @GeneratedValue
    public Long enderecoId;
    public String cep;
    public String logradouro;
    public String complemento;
    public String numero;
    public String cidade;
    @OneToMany(mappedBy = "endereco", cascade = CascadeType.MERGE)
    public List<Cadastro> cadastros = new ArrayList<Cadastro>();

    public void addCadastro(Cadastro cadastro) {
        cadastro.setEndereco(this);
        this.cadastros.add(cadastro);
    }

    public void removeCadastro(Cadastro cadastro) {
        this.cadastros.remove(cadastro);
        cadastro.setEndereco(null);
    }
}

package com.example.lavanderiabackend.models.Endereco;

import java.util.List;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Endereco {
    @Id
    @GeneratedValue
    public Long enderecoId;
    public String cep;
    public String logradouro;
    public String complemento;
    public String numero;
    public String cidade;
    @OneToMany(mappedBy = "endereco")
    public List<Cadastro> cadastros;
}

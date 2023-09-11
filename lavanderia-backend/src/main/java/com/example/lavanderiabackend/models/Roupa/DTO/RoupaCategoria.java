package com.example.lavanderiabackend.models.Roupa.DTO;

import com.example.lavanderiabackend.models.Roupa.Roupa;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class RoupaCategoria {
    public String numero;
    public String descricao;
    public Double valor;
    public String nomeCategoria;

    public RoupaCategoria(Roupa roupa) {
        this.numero = roupa.numero;
        this.descricao = roupa.descricao;
        this.valor = roupa.valor;
        this.nomeCategoria = roupa.categoria.nomeCategoria;
    }
}
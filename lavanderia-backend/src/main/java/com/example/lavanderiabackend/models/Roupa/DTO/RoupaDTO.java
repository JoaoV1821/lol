package com.example.lavanderiabackend.models.Roupa.DTO;

import com.example.lavanderiabackend.models.Roupa.Roupa;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoupaDTO {
    public String numero;
    public String descricao;
    public Double valor;
    public String numeroCategoria;
    public String categoria;
    public Long tempoDeLavagem;

    public RoupaDTO(Roupa roupa) {
        this.numero = roupa.numero;
        this.descricao = roupa.descricao;
        this.valor = roupa.valor;
        this.numeroCategoria = roupa.categoria.getNumero();
        this.tempoDeLavagem = roupa.getTempoDeLavagem();
        this.categoria = roupa.getCategoria().getDescricao();
    }

    public RoupaDTO(String string, String string2, double d, String string3, long l) {
        this.numero = string;
        this.descricao = string2;
        this.valor = d;
        this.numeroCategoria = string3;
        this.tempoDeLavagem = l;
    }

}

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
public class AddRoupaDTO {

    public String descricao;
    public Double valor;
    public String numeroCategoria;
    public Long tempoDeLavagem;

    public AddRoupaDTO(Roupa roupa) {
        this.descricao = roupa.descricao;
        this.valor = roupa.valor;
        this.numeroCategoria = roupa.categoria.getNumero();
        this.tempoDeLavagem = roupa.getTempoDeLavagem();

    }

    public AddRoupaDTO(String string, String string2, double d, String string3, long l) {
        this.descricao = string2;
        this.valor = d;
        this.numeroCategoria = string3;
        this.tempoDeLavagem = l;
    }
}

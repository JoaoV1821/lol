package com.example.lavanderiabackend.models.Roupa.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoupaCarrinho {

    public Double valor;
    public String descricao;
    public String numero;
    public Double quantidade;
    public String categoria;
    public Long tempoDeLavagem;
}

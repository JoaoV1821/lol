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
    public String numero;
    public Double valor;
    public String descricao;
    public Double quantidade;
    public String nomeCategoria;
}

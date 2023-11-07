package com.example.lavanderiabackend.models.Carrinho.DTOS;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarrinhoDTO {
    private String numeroRoupa;
    private Double quantidade;
}

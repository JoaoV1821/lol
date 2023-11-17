package com.example.lavanderiabackend.wrappers;

import java.util.List;

import com.example.lavanderiabackend.models.Carrinho.DTOS.CarrinhoDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarrinhoWrapper {
    public List<CarrinhoDTO> carrinhos;
}

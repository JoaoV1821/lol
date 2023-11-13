package com.example.lavanderiabackend.models.Pedido.DTO;

import java.util.List;

import com.example.lavanderiabackend.models.Roupa.DTO.RoupaCarrinho;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PedidoDTO {
    public List<RoupaCarrinho> roupas;
}

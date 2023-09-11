package com.example.lavanderiabackend.models.Pedido.DTO;

import java.time.LocalDate;

import com.example.lavanderiabackend.models.Pedido.Pedido;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PedidoInfo {
    public Long numero;
    public LocalDate data;
    public LocalDate prazo;
    public double total;
    public String status;

    public PedidoInfo(Pedido pedido) {
        this.numero = pedido.numero;
        this.data = pedido.data;
        this.prazo = pedido.prazo;
        this.total = pedido.total;
        this.status = pedido.status;
    }
}

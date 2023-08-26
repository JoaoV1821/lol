package com.example.lavanderiabackend.Pedido.DTO;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PedidoBodyModelo {

    public LocalDate data;
    public LocalDate prazo;
    public double total;
    public String status;

    public PedidoBodyModelo(PedidoModelo pedidoModelo) {
        this.data = pedidoModelo.data;
        this.prazo = pedidoModelo.prazo;
        this.total = pedidoModelo.total;
        this.status = pedidoModelo.status;
    }

}

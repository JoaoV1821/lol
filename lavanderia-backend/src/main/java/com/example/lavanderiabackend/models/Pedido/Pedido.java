package com.example.lavanderiabackend.models.Pedido;

import java.time.LocalDate;
import java.util.List;

import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Pedido {
    @Id
    @SequenceGenerator(name = "pedido_sequence", sequenceName = "pedido_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pedido_sequence")
    public Long codigoPedido;
    public Long numero;
    public LocalDate data;
    public LocalDate prazo;
    public double total;
    public String status;
    @OneToMany(mappedBy = "pedido")
    public List<Carrinho> carrinhos;

    public Pedido(PedidoBody pedidoBody) {
        this.numero = pedidoBody.numero;
        this.data = pedidoBody.data;
        this.prazo = pedidoBody.prazo;
        this.total = pedidoBody.total;
        this.status = pedidoBody.status;
    }

}

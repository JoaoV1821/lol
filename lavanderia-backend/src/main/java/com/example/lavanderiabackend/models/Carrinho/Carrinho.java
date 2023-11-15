package com.example.lavanderiabackend.models.Carrinho;

import com.example.lavanderiabackend.models.Pedido.Pedido;
import com.example.lavanderiabackend.models.Roupa.Roupa;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@IdClass(CarrinhoId.class)
public class Carrinho {

    @Id
    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    @Id
    @ManyToOne
    @JoinColumn(name = "roupa_id")
    private Roupa roupa;

    private Double quantidade;

    public Carrinho(Pedido pedido, Roupa roupa, Double quantidade) {
        this.quantidade = quantidade;
        this.roupa = roupa;
        this.pedido = pedido;
        pedido.carrinhos.add(this);
        roupa.carrinhos.add(this);
    }

}

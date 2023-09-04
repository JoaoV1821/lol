package com.example.lavanderiabackend.models.Carrinho;

import com.example.lavanderiabackend.models.Pedido.Pedido;
import com.example.lavanderiabackend.models.Roupa.Roupa;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@IdClass(CarrinhoId.class)
public class Carrinho {

    @Id
    @ManyToOne
    @JoinColumn(name = "pedido_id")
    public Pedido pedido;

    @Id
    @ManyToOne
    @JoinColumn(name = "roupa_id")
    public Roupa roupa;

    public Double quantidade;

}

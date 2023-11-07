package com.example.lavanderiabackend.models.Pedido.DTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Pedido.Pedido;
import com.example.lavanderiabackend.models.Roupa.DTO.RoupaCarrinho;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class PedidoBody {
    public Long numero;
    public LocalDate data;
    public LocalDate prazo;
    public double total;
    public String status;
    public List<RoupaCarrinho> roupas;

    public PedidoBody(Pedido pedido) {
        this.numero = pedido.numero;
        this.data = pedido.data;
        this.prazo = pedido.prazo;
        this.total = pedido.total;
        this.status = pedido.status;
        this.roupas = new ArrayList<>();
        for (Carrinho carrinho : pedido.getCarrinhos()) {
            RoupaCarrinho roupa = new RoupaCarrinho();
            roupa.categoria = carrinho.getRoupa().categoria.getDescricao();
            roupa.valor = carrinho.getRoupa().valor;
            roupa.numero = carrinho.getRoupa().numero;
            roupa.quantidade = carrinho.getQuantidade();
            roupa.descricao = carrinho.getRoupa().getDescricao();
            roupa.tempoDeLavagem = carrinho.getRoupa().getTempoDeLavagem();
            roupas.add(roupa);
        }
    }
}
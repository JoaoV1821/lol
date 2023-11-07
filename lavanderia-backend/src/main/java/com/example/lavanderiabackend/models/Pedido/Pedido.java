package com.example.lavanderiabackend.models.Pedido;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pedido implements Comparable<Pedido> {
    @Id
    @SequenceGenerator(name = "pedido_sequence", sequenceName = "pedido_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pedido_sequence")
    public Long id;// 1,2,3,4,5,6,7,
    public Long numero; // Cliente 1 : 001 ,002 ,003 ,0004 , Cliente2 : 001 ,002 , 007
    public LocalDate data;
    public LocalDate prazo;
    public double total;
    public String status;
    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    public List<Carrinho> carrinhos;
    @ManyToOne
    @JoinColumn(name = "cadastro_id", nullable = false)
    public Cadastro cadastro;

    public Pedido(PedidoBody pedidoBody) {
        this.numero = pedidoBody.numero;
        this.data = pedidoBody.data;
        this.prazo = pedidoBody.prazo;
        this.total = pedidoBody.total;
        this.status = pedidoBody.status;
    }

    public void addCarrinho(Carrinho carrinho) {
        carrinho.setPedido(this);
        carrinhos = carrinhos != null ? carrinhos : new ArrayList<>();
        carrinhos.add(carrinho);
    }

    @Override
    public int compareTo(Pedido o) {
        return this.getNumero().compareTo(o.getNumero());
    }

}

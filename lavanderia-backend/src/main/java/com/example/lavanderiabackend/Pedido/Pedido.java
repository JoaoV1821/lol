package com.example.lavanderiabackend.Pedido;

import java.time.LocalDate;
import java.util.List;

import com.example.lavanderiabackend.Carrinho.Carrinho;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
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
}

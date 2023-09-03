package com.example.lavanderiabackend.Roupa;

import com.example.lavanderiabackend.Categoria.Categoria;

import java.util.List;

import com.example.lavanderiabackend.Carrinho.Carrinho;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Roupa {

    @Id
    @SequenceGenerator(name = "roupa_sequence", sequenceName = "roupa_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "roupa_sequence")
    public Long idRoupa;
    public Double valor;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    public Categoria categoria;

    @OneToMany(mappedBy = "roupa", cascade = CascadeType.ALL, orphanRemoval = true)
    public List<Carrinho> carrinhos;

    public Roupa(Double valor, Categoria categoria) {
        this.categoria = categoria;
        this.valor = valor;
    }
}

package com.example.lavanderiabackend.models.Roupa;

import java.util.List;

import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Categoria.Categoria;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
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

public class Roupa {

    @Id
    @SequenceGenerator(name = "roupa_sequence", sequenceName = "roupa_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "roupa_sequence")
    public Long id;
    @Column(unique = true)
    public String numero;
    @Column(unique = true)
    public String descricao;
    public Double valor;
    @Column(name = "tempo_lavagem")
    public Long tempoDeLavagem;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    public Categoria categoria;

    @OneToMany(mappedBy = "roupa", cascade = CascadeType.PERSIST, orphanRemoval = true)
    public List<Carrinho> carrinhos;

    @Override
    public String toString() {
        return this.getId() + "," + this.getNumero() + "," + this.getDescricao();
    }

}

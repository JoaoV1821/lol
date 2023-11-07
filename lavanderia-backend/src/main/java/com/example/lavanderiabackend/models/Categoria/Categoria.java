package com.example.lavanderiabackend.models.Categoria;

import java.util.ArrayList;
import java.util.List;

import com.example.lavanderiabackend.models.Roupa.Roupa;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
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
public class Categoria {
    @Id
    @SequenceGenerator(name = "categoria_sequence", sequenceName = "categoria_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categoria_sequence")
    private Long id;
    @Column(unique = true)
    private String numero;
    @Column(unique = true)
    private String descricao;
    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Roupa> roupas = new ArrayList<Roupa>();

    public void addRoupa(Roupa roupa) {
        if (!this.roupas.contains(roupa)) {
            roupa.categoria = this;
            this.roupas.add(roupa);
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        Categoria categoria = (Categoria) obj;
        return this.id.equals(categoria.id) && this.numero.equals(categoria.numero)
                && this.descricao.equals(categoria.descricao);
    }

    @Override
    public String toString() {
        return "Id:" + this.getId() + ",Numero:" + this.getNumero() + ",Descrição:" + this.getDescricao();
    }

}

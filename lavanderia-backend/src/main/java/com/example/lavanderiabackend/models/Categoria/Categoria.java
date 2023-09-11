package com.example.lavanderiabackend.models.Categoria;

import java.util.ArrayList;
import java.util.List;

import com.example.lavanderiabackend.models.Roupa.Roupa;

import jakarta.persistence.CascadeType;
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
    public Long id;
    public String numero;
    public String nomeCategoria;
    @OneToMany(mappedBy = "categoria", cascade = CascadeType.PERSIST, orphanRemoval = false)
    public List<Roupa> roupas = new ArrayList<Roupa>();
}

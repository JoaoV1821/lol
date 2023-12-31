package com.example.lavanderiabackend.models.Categoria;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    public Categoria findByNumero(String numero_categoria);
}

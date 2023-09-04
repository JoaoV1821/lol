package com.example.lavanderiabackend.models.Roupa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoupaRepository extends JpaRepository<Roupa, Long> {
    public Roupa findByNumero(String numero_roupa);
}

package com.example.lavanderiabackend.models.Pedido;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PedidoRepository extends JpaRepository<Pedido, String> {

    public Optional<Pedido> findByNumero(Long numero);

    public void deleteByNumero(Long numero);

    @Query("SELECT p FROM Pedido p WHERE p.data >= :dataInicial AND p.data <= :dataPrazo")
    public List<Pedido> findAllByDate(@Param("dataInicial") LocalDate dataInicial,
            @Param("dataPrazo") LocalDate dataPrazo);

    @Query("SELECT p FROM Pedido p WHERE p.data >= :dataInicial")
    public List<Pedido> findAllByInitialDate(@Param("dataInicial") LocalDate dataInicial);
    
    @Query("SELECT p FROM Pedido p WHERE p.status >= :status")
    public List<Pedido> findAllByStatus(@Param("status") String status);
}

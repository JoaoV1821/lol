package com.example.lavanderiabackend.models.Pedido;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;

public interface PedidoRepository extends JpaRepository<Pedido, String> {

    public Optional<Pedido> findByNumero(Long numero);

    public void deleteByNumero(Long numero);

    @Query("SELECT p FROM Pedido p WHERE p.data >= :dataInicial AND p.data <= :dataPrazo ORDER BY p.data DESC")
    public List<Pedido> findAllByDate(@Param("dataInicial") LocalDate dataInicial,
            @Param("dataPrazo") LocalDate dataPrazo);

    @Query("SELECT p FROM Pedido p WHERE p.data >= :dataInicial ORDER BY p.data DESC")
    public List<Pedido> findAllByInitialDate(@Param("dataInicial") LocalDate dataInicial);

    @Query("SELECT p FROM Pedido p WHERE p.data <= :dataFinal ORDER BY p.data DESC")
    public List<Pedido> findAllByFinalDate(@Param("dataFinal") LocalDate dataFinal);

    @Query("SELECT p FROM Pedido p WHERE p.status >= :status ORDER BY p.data DESC")
    public List<Pedido> findAllByStatus(@Param("status") String status);

    public List<Pedido> findByCadastro(Cadastro cadastro);
}

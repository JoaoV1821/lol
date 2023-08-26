package com.example.lavanderiabackend.Pedido;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, String> {
    public Pedido findByNumero(Long numero);

    public void deleteByNumero(Long numero);

}

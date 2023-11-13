package com.example.lavanderiabackend.models.Carrinho;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, CarrinhoId> {

    List<Carrinho> findByPedido_Id(Long id_pedido);

    List<Carrinho> findByRoupa_Id(Long id_roupa);
}

package com.example.lavanderiabackend.models.Carrinho;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarrinhoService {

    private CarrinhoRepository carrinhoRepository;

    @Autowired
    CarrinhoService(CarrinhoRepository carrinhoRepository) {
        this.carrinhoRepository = carrinhoRepository;
    }

    public void updateCarrinho() {

    }

    /*
     * [
     * {
     * numero_roupa,
     * valor,
     * custo,
     * 
     * },
     * ]
     */

    public void getPedidosList(String numero_roupa) {

    }

}

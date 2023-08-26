package com.example.lavanderiabackend.Pedido;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Pedido.DTO.PedidoBodyModelo;
import com.example.lavanderiabackend.Pedido.DTO.PedidoModelo;

@Service
public class PedidoService {

    PedidoRepository pedidoRepository;

    @Autowired
    PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    public List<PedidoModelo> getPedidoList() {
        List<PedidoModelo> modelos = new ArrayList<PedidoModelo>();
        for (Pedido pedido : pedidoRepository.findAll()) {
            modelos.add(new PedidoModelo(pedido));
        }
        return modelos;
    }

    public PedidoModelo getPedido(Long numero_pedido) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido);
        return new PedidoModelo(pedido);
    }

    public void deletePedido(Long numero_pedido) {
        pedidoRepository.deleteByNumero(numero_pedido);
    }

    public void updatePedido(Long numero_pedido, PedidoBodyModelo body) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido);
        if (pedido != null) {
            BeanUtils.copyProperties(body, pedido);
            pedidoRepository.save(pedido);
        }
    }

    public void updateStatus(Long numero_pedido, String status) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido);
        if (pedido != null) {
            pedido.setStatus(status);
            pedidoRepository.save(pedido);
        }
    }

    public void addPedido(PedidoModelo modelo) {
        Pedido pedido = new Pedido();
        BeanUtils.copyProperties(modelo, pedido);
        pedidoRepository.save(pedido);
    }
}

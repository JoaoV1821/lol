package com.example.lavanderiabackend.Pedido;

import java.util.List;
import java.time.LocalDate;
import java.util.ArrayList;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Pedido.DTO.PedidoBodyModelo;
import com.example.lavanderiabackend.Pedido.DTO.PedidoModelo;

import jakarta.transaction.Transactional;

@Service
public class PedidoService {

    PedidoRepository pedidoRepository;

    ModelMapper modelMapper;

    @Autowired
    PedidoService(PedidoRepository pedidoRepository, ModelMapper modelMapper) {
        this.pedidoRepository = pedidoRepository;
        this.modelMapper = modelMapper;
    }

    public List<PedidoModelo> getPedidoList(String dataInicial, String dataPrazo) {
        List<PedidoModelo> modelos = new ArrayList<PedidoModelo>();
        if (dataInicial == null || dataPrazo == null) {
            for (Pedido pedido : pedidoRepository.findAll()) {
                modelos.add(new PedidoModelo(pedido));
            }
        } else {
            LocalDate ini = LocalDate.parse(dataInicial);
            LocalDate prazo = LocalDate.parse(dataPrazo);
            for (Pedido pedido : pedidoRepository.findAllByDate(ini, prazo)) {
                modelos.add(new PedidoModelo(pedido));
            }
        }
        return modelos;
    }

    public PedidoModelo getPedido(Long numero_pedido) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido);
        if (pedido != null) {
            return new PedidoModelo(pedido);
        }
        return null;
    }

    @Transactional
    public void deletePedido(Long numero_pedido) {
        pedidoRepository.deleteByNumero(numero_pedido);
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido);
        if (pedido != null) {
            pedidoRepository.delete(pedido);
        }
    }

    public void updatePedido(Long numero_pedido, PedidoBodyModelo body) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido);
        if (pedido != null) {
            pedido = modelMapper.map(body, pedido.getClass());
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
        pedido = modelMapper.map(modelo, pedido.getClass());
        pedidoRepository.save(pedido);
    }
}

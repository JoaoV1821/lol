package com.example.lavanderiabackend.models.Pedido;

import java.util.List;
import java.time.LocalDate;
import java.util.ArrayList;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Exceptions.StandardNotFoundException;
import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Carrinho.CarrinhoRepository;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoInfo;
import com.example.lavanderiabackend.models.Roupa.Roupa;
import com.example.lavanderiabackend.models.Roupa.RoupaRepository;
import com.example.lavanderiabackend.models.Roupa.DTO.RoupaCarrinho;

import jakarta.transaction.Transactional;

@Service
public class PedidoService {

    PedidoRepository pedidoRepository;
    CarrinhoRepository carrinhoRepository;
    RoupaRepository roupaRepository;
    ModelMapper modelMapper;

    @Autowired
    PedidoService(PedidoRepository pedidoRepository, ModelMapper modelMapper, CarrinhoRepository carrinhoRepository,
            RoupaRepository roupaRepository) {
        this.pedidoRepository = pedidoRepository;
        this.modelMapper = modelMapper;
        this.carrinhoRepository = carrinhoRepository;
        this.roupaRepository = roupaRepository;
    }

    public PedidoBody getPedido(Long numero_pedido) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
        .orElseThrow(()->new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        return new PedidoBody(pedido);
    }

    public List<PedidoBody> getPedidoList(String dataInicial, String dataPrazo) {
        List<PedidoBody> pedidos = new ArrayList<PedidoBody>();
        if (dataInicial == null && dataPrazo == null) {
            for (Pedido pedido : pedidoRepository.findAll()) {
                pedidos.add(new PedidoBody(pedido));
            }
        } else if (dataInicial != null && dataPrazo == null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            for (Pedido pedido : pedidoRepository.findAllByInitialDate(ini)) {
                pedidos.add(new PedidoBody(pedido));
            }
        } else if (dataPrazo != null || dataInicial != null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            LocalDate prazo = LocalDate.parse(dataPrazo);
            for (Pedido pedido : pedidoRepository.findAllByDate(ini, prazo)) {
                pedidos.add(new PedidoBody(pedido));
            }
        }
        return pedidos;
    }

    public List<PedidoInfo> getPedidoInfoList(String dataInicial, String dataPrazo) {
        List<PedidoInfo> modelos = new ArrayList<PedidoInfo>();
        if (dataInicial == null && dataPrazo == null) {
            for (Pedido pedido : pedidoRepository.findAll()) {
                modelos.add(new PedidoInfo(pedido));
            }
        } else if (dataInicial != null && dataPrazo == null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            for (Pedido pedido : pedidoRepository.findAllByInitialDate(ini)) {
                modelos.add(new PedidoInfo(pedido));
            }
        } else if (dataPrazo != null && dataInicial != null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            LocalDate prazo = LocalDate.parse(dataPrazo);
            for (Pedido pedido : pedidoRepository.findAllByDate(ini, prazo)) {
                modelos.add(new PedidoInfo(pedido));
            }
        }
        return modelos;
    }

    public PedidoInfo getPedidoInfo(Long numero_pedido) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
        .orElseThrow(()->new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        return new PedidoInfo(pedido);
    }

    @Transactional
    public void deletePedido(Long numero_pedido) {
        pedidoRepository.deleteByNumero(numero_pedido);
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
        .orElseThrow(()->new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        pedidoRepository.delete(pedido);
    }

    public void updatePedido(Long numero_pedido, PedidoBody body) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
        .orElseThrow(()->new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        pedido = modelMapper.map(body, pedido.getClass());
        pedidoRepository.save(pedido);
    }

    public void updateStatus(Long numero_pedido, String status) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
        .orElseThrow(()->new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        pedido.setStatus(status);
        pedidoRepository.save(pedido);
    }

    public void addPedido(PedidoBody modelo) {
        Pedido pedido = new Pedido();
        pedido = modelMapper.map(modelo, pedido.getClass());
        pedido = pedidoRepository.save(pedido);
        for (RoupaCarrinho roupaModelo : modelo.roupas) {
            Roupa resultado = roupaRepository.findByNumero(roupaModelo.numero);
            if (resultado != null) {
                Carrinho carrinho = new Carrinho();
                carrinho.setPedido(pedido);
                carrinho.setQuantidade(roupaModelo.quantidade);
                carrinho.setRoupa(resultado);
                carrinhoRepository.save(carrinho);
            }
        }
    }
}

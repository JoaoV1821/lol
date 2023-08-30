package com.example.lavanderiabackend.Pedido;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.Pedido.DTO.PedidoBodyModelo;
import com.example.lavanderiabackend.Pedido.DTO.PedidoModelo;

import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/pedido")
@CrossOrigin(originPatterns = "*")
public class PedidoController {

    PedidoService pedidoService;

    @Autowired
    PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @GetMapping("/get/pedidos")
    public List<PedidoModelo> getPedidos(@RequestParam(required = false) String dataInicial,
            @RequestParam(required = false) String dataPrazo) {
        return pedidoService.getPedidoList(dataInicial, dataPrazo);

    }

    @PostMapping("/get/pedido")
    public PedidoModelo getPedido(@RequestBody NumeroPedidoWrapper numero_pedido) {
        return pedidoService.getPedido(numero_pedido.getNumero());
    }

    @PostMapping("/delete/pedido")
    public ResponseEntity<Integer> deletePedido(@RequestBody NumeroPedidoWrapper numero_pedido) {
        pedidoService.deletePedido(numero_pedido.getNumero());
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/pedido")
    public ResponseEntity<Integer> updatePedido(@RequestBody PedidoModelo pedido) {
        pedidoService.updatePedido(pedido.numero, new PedidoBodyModelo(pedido));
        return ResponseEntity.ok(200);
    }

    @PostMapping("/add/pedido")
    public ResponseEntity<Integer> addPedido(@RequestBody PedidoModelo modelo) {
        pedidoService.addPedido(modelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/status")
    public ResponseEntity<Integer> updateStatus(@RequestBody updateWrapper wrapper) {
        pedidoService.updateStatus(wrapper.getNumero(), wrapper.getStatus());
        return ResponseEntity.ok(200);
    }

}

@Getter
@Setter
class NumeroPedidoWrapper {
    public Long numero;
}

@Getter
@Setter
class StatusWrapper {
    public String status;
}

@Getter
@Setter
class updateWrapper {
    public Long numero;
    public String status;
}